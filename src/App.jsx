import { useState, useRef, useEffect } from 'react';
import SearchField from './components/SearchField';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmployeeCard from './components/EmployeeCard';
import DeleteModal from './components/DeleteModal';

function App() {
  const [employees, setEmployees] = useState("");
  const [masterEmployees, setMasterEmployees] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filterBy, setFilterBy] = useState("Name");
  const [sortBy, setSortBy] = useState("")

  const [employeeToDelete, setEmployeeToDelete] = useState("")

  const toggleModal = (employee) => {
    setEmployeeToDelete(employee)
    setShowModal(!showModal)
  }

  const handleDelete = () => {
    setEmployees(employees.filter(employee => employee.id !== employeeToDelete))
    toggleModal();
  }

  const handleFilter = (e) => {
    setFilterBy(e)
  }

  const handleSort = () => {
    setSortBy(prevState => {
      if(prevState === "" || prevState === "up") {
        setEmployees(sortEmployeesAsc())
        return "down";
      }
      else if(prevState === "down") {
        setEmployees(sortEmployeesDesc())
        return "up"
      }
    })
  }

  const sortEmployeesAsc = () => {
      return employees.sort((a,b) => {
        if(a.name > b.name)
          return 1;
        else if(a.name < b.name)
          return -1;
        return 0;
      });
    }
  const sortEmployeesDesc = () => {
      return employees.sort((a,b) => {
        if(a.name < b.name)
          return 1;
        else if(a.name > b.name)
          return -1;
        return 0;
      });
    }
  

  const getAllEmployees = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response => {
      setMasterEmployees(response)
      return response
    })
  }

  useEffect(() => {
    if(searchInput !== "") {
      if(filterBy === "Company") {
        setEmployees(masterEmployees.filter(employee => employee.company.name.toLowerCase().includes(searchInput)))
      } 
      else{
        setEmployees(masterEmployees.filter(employee => employee.name.toLowerCase().includes(searchInput)))
      }
    }
    else {
      getAllEmployees().then(res => setEmployees(res));
    }
  }, [searchInput, filterBy])

  // useEffect(() => {
  //   getAllEmployees().then(res => setEmployees(res));
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        Address Book
      </header>
      <div>
        <SearchField 
          searchInput={searchInput} 
          setSearchInput={setSearchInput} 
          filterBy={filterBy} 
          handleFilter={handleFilter} 
          sortBy={sortBy}
          handleSort={handleSort}
        />
        <EmployeeCard employees={employees} toggleModal={toggleModal} />
        { showModal && 
          <DeleteModal showModal={showModal} toggleModal={toggleModal} handleDelete={handleDelete} />
        }
      </div>
    </div>
  );
}

export default App;

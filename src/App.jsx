import { useState, useRef, useEffect } from 'react';
import SearchField from './components/SearchField';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmployeeCard from './components/EmployeeCard';
import DeleteModal from './components/DeleteModal';
import AddModal from './components/AddModal';

function App() {
  const [employees, setEmployees] = useState("");
  const [masterEmployees, setMasterEmployees] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterBy, setFilterBy] = useState("Name");
  const [sortBy, setSortBy] = useState("")

  const [employeeToDelete, setEmployeeToDelete] = useState("")

  const toggleDeleteModal = (employee) => {
    setEmployeeToDelete(employee)
    setShowDeleteModal(!showDeleteModal)
  }

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  
  const handleDelete = () => {
    setEmployees(employees.filter(employee => employee.id !== employeeToDelete))
    toggleDeleteModal();
  }

  const handleAdd = (employeeName, employeeCompany, employeeCatchphrase, employeePhone,) => {
    var newEmployee = {
      id: employees.length + 1,
      name: employeeName,
      username: "somethings",
      email: "abc@xyz.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: employeePhone,
      website: "something.net",
      company: {
        name: employeeCompany,
        catchPhrase: employeeCatchphrase,
        bs: "synergize scalable supply-chains" 
      }
    }
    setEmployees(prevState => {return [...prevState, newEmployee]})
    toggleAddModal();
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
    setSortBy("")
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
          toggleAddModal={toggleAddModal}
        />
        <EmployeeCard employees={employees} toggleModal={toggleDeleteModal} />
        { showDeleteModal && 
          <DeleteModal showModal={showDeleteModal} toggleModal={toggleDeleteModal} handleDelete={handleDelete} />
        }
        { showAddModal && 
          <AddModal showModal={showAddModal} toggleModal={toggleAddModal} handleAdd={handleAdd} />
        }
      </div>
    </div>
  );
}

export default App;

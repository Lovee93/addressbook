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

  const [employeeToDelete, setEmployeeToDelete] = useState("")

  const toggleModal = (employee) => {
    setEmployeeToDelete(employee)
    setShowModal(!showModal)
  }

  const handleDelete = () => {
    setEmployees(employees.filter(employee => employee.id !== employeeToDelete))
    toggleModal();
  }

  const handleFilter = () => {
    
  }

  const getAllEmployees = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response => {
      setMasterEmployees(response)
      return response
    })
  }

  //console.log(employees)

  useEffect(() => {
    if(searchInput !== "") {
      setEmployees(masterEmployees.filter(employee => employee.name.toLowerCase().includes(searchInput)))
    }
    else {
      getAllEmployees().then(res => setEmployees(res));
    }
  }, [searchInput])

  // useEffect(() => {
  //   getAllEmployees().then(res => setEmployees(res));
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        Address Book
      </header>
      <div>
        <SearchField searchInput={searchInput} setSearchInput={setSearchInput} />
        <EmployeeCard employees={employees} toggleModal={toggleModal} />
        { showModal && 
          <DeleteModal showModal={showModal} toggleModal={toggleModal} handleDelete={handleDelete} />
        }
      </div>
    </div>
  );
}

export default App;

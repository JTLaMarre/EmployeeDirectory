import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar.js'
import EmployeeRow from './components/EmployeeRow.js'

const TestEmployee = {
  name:{
    first:"Bob",
    last:"Belcher"
  },
  phone: 704-999-9999,
  email: "test@email.com",
  age:22
}

function App() {
  return (
    <div>
    {/* <Nav/> */}
    <div className="columns is-centered">
                <div className="column is-half">
                <table className="table">
                <EmployeeRow
                name={TestEmployee.name}
                phone ={TestEmployee.phone}
                email = {TestEmployee.email}
                age ={TestEmployee.age}
                 />
                </table>
                </div>
                
            </div>
    </div>
  );
}

export default App;

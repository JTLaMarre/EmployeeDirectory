import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeRow from './components/EmployeeRow.js'

const TestEmployee = {
  name:{
    first:"Bob",
    last:"Belcher"
  },
  phone: "704-999-9999",
  email: "test@email.com",
  age:22
}

function App() {
  return (
    <div>
    <div className="hero is-primary">
    <div className="hero-body">
      <h1 className="is-size-2"> Employee Directory</h1>
     <a>Search <input type="text"></input></a>
    </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-half">
                <table className="table">
                <tr>
                  <th>name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Age</th>
                </tr>
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

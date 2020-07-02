import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeRow from './components/EmployeeRow.js'
import employees from './employees.json'


class App extends Component {

  state= {
employees
  }




  render(){
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
                {this.state.employees.map(employee => (
          <EmployeeRow
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
            age={employee.dob.age}
          />
        ))}
          
                </table>
                </div>
                
            </div>
    </div>
  );
  }
}

export default App;

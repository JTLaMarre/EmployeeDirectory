import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeRow from './components/EmployeeRow.js'
import employees from './employees.json'


class App extends Component {

  state= {
employees,
searched: ""
  }

  handleInputChange = event => {
    
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };


searchforEmployee = name => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  const emploees = this.state.employeess.filter(employee => employee.name === name);
  // Set this.state.friends equal to the new friends array
  this.setState({ employees});
};


  render(){
  return (
    <div>
    <div className="hero is-primary">
    <div className="hero-body">
      <h1 className="is-size-2"> Employee Directory</h1>
     <span>Search 
     <input 
     type="text"
     value ={this.state.searched}
     onChange={this.handleInputChange}
     placeholder="search here"
     >
    </input>
    <button className="button is-warning">
      search
    </button>
     </span>
    </div>
    </div>
    <div className="columns is-centered">
      <div className="column is-half">
                <table className="table">
                <tbody>
                <tr>
                  <th>name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Age</th>
                </tr>
                {this.state.employees.map(employee => (
          <EmployeeRow
            id={employee.login.uuid}
            key={employee.login.uuid}
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
            age={employee.dob.age}
          />
        ))}
          </tbody>
          
                </table>
                </div>
                
            </div>
    </div>
  );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import EmployeeRow from './components/EmployeeRow.js'
import employees from './employees.json'


class App extends Component {

  state= {
employees,
searched: ""
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSearch=event=>{
    event.preventDefault();
    let name = (this.state.searched)
    this.searchforEmployee(name)
  }
  
  
  searchforEmployee(name) {
    console.log(this.state.searched)
  console.log(name)
  console.log(this.state.employees)
  const employees = this.state.employees.filter(employee => employee.name.first === name);
  console.log(employees)
  this.setState({employees});
};
sortName=()=>{
const employees= this.state.employees.sort(function(a,b){
    if(a.name.first < b.name.first){
        return -1;
    }else{
        return 1;
    }
})
this.setState({employees})
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
     value ={this.value}
     onChange={this.handleInputChange}
     placeholder="search by first name here"
     name="searched"
     >
    </input>
    <button className="button is-warning" onClick={this.handleSearch}>
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
                  <th onClick={this.sortName}>name</th>
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

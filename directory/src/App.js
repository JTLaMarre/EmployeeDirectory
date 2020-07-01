import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar.js'
import List from './components/EmployeeList.js'

function App() {
  return (
    <Fragment>
    <Nav/>
    <List />
    </Fragment>
  );
}

export default App;

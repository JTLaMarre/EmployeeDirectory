import React, { Fragment } from 'react';

const Nav = () => {
    return (
        
        <nav className="navbar is-info is-fixed-top">
                <div className="navbar-brand">
                   
                </div>
                <div className="navbar-menu">
                    <h1 className="navbar-item is-active is-size-2">Employees</h1>
                    <div className="navbar-item field is-active">
                        <input className="input" type="search" placeholder="Search..."></input>
                    </div>
                </div>
            </nav>
    )
}

export default Nav;
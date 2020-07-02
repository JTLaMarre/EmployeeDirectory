import React from 'react'

const EmployeeRow = (props) => {
    return (
        
        <tr>
            <th>{props.name.first} {props.name.last}</th>
            <th>Phone:{props.phone}</th>
            <th>Email:{props.email}</th>
            <th>Age:{props.age}</th>
        </tr>
    )
}

export default EmployeeRow
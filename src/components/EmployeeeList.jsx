import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../context/EmployeeProvider';

const EmployeeList = () => {
    const { state, dispatch } = useContext(EmployeeContext);

    const handleDelete = (index) => {
        dispatch({ type: 'DELETE_EMPLOYEE', payload: index });
    };

    return (
        <div>
            <h2>Employee List</h2>
            <Link to="/add">Add New Employee</Link>
            <ul>
                {state.employees.map((employee, index) => (
                    <li key={index}>
                        <Link to={`/view/${index}`}>{employee.name}</Link>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;

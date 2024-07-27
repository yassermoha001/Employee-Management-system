import React, { useContext } from 'react';
import EmployeeList from '../components/EmployeeeList';
import { EmployeeContext } from '../context/EmployeeProvider';

const HomePage = () => {
    const { state } = useContext(EmployeeContext);

    return (
        <div>
            <h1>Employee Management System</h1>
            <EmployeeList employees={state.employees} />
        </div>
    );
};

export default HomePage;

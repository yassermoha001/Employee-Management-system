import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../context/EmployeeProvider';

const ViewEmployeePage = () => {
    const { id } = useParams(); // Get the employee index from URL
    const { state } = useContext(EmployeeContext); // Access the employee state
    const employee = state.employees[id]; // Retrieve the employee details by index

    return (
        <div>
            <h2>Employee Details</h2>
            {employee ? (
                <div>
                    <p><strong>Name:</strong> {employee.name}</p>
                    <p><strong>Address:</strong> {employee.address}</p>
                    <p><strong>Contact Details:</strong> {employee.contactDetails}</p>
                    <p><strong>Date of Birth:</strong> {employee.dateOfBirth}</p>
                    <p><strong>Social Security Number:</strong> {employee.socialSecurityNumber}</p>
                    <p><strong>Employment Dates:</strong> {employee.employmentDates}</p>
                    <p><strong>Positions Held:</strong> {employee.positionsHeld}</p>
                    <p><strong>Salary History:</strong> {employee.salaryHistory}</p>
                    <p><strong>Performance Evaluations:</strong> {employee.performanceEvaluations}</p>
                    <p><strong>Achievements:</strong> {employee.achievements}</p>
                    <p><strong>Disciplinary Actions:</strong> {employee.disciplinaryActions}</p>
                </div>
            ) : (
                <p>Employee not found.</p>
            )}
        </div>
    );
};

export default ViewEmployeePage;

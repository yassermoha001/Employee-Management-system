import React, { useRef, useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

export default function EmployeeForm() {
  const { dispatch } = useContext(EmployeeContext);

  // Refs for each input field
  const nameRef = useRef();
  const positionRef = useRef();
  const departmentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new employee object from input values
    const newEmployee = {
      id: Date.now(),
      name: nameRef.current.value,
      position: positionRef.current.value,
      department: departmentRef.current.value,
    };

    // Dispatch the ADD_EMPLOYEE action with the new employee data
    dispatch({ type: 'ADD_EMPLOYEE', payload: newEmployee });

    // Clear input fields after submission
    nameRef.current.value = '';
    positionRef.current.value = '';
    departmentRef.current.value = '';
  };

  return (
    <form className="flex flex-col items-center mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameRef}
        className="p-2 border border-gray-300 rounded-lg w-72 mb-2"
        placeholder="Employee Name"
      />
      <input
        type="text"
        ref={positionRef}
        className="p-2 border border-gray-300 rounded-lg w-72 mb-2"
        placeholder="Position"
      />
      <input
        type="text"
        ref={departmentRef}
        className="p-2 border border-gray-300 rounded-lg w-72 mb-2"
        placeholder="Department"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Add Employee
      </button>
    </form>
  );
}

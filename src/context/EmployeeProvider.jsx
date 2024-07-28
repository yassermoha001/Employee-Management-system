// EmployeeContext.js
import React, { createContext, useReducer, useEffect } from 'react';

// Initial State
const initialState = JSON.parse(localStorage.getItem('employees')) || {
  employees: [],
};

// Actions
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

// Reducer
function employeeReducer(state, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };
    case REMOVE_EMPLOYEE:
      return { ...state, employees: state.employees.filter(employee => employee.id !== action.payload) };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(employee =>
          employee.id === action.payload.id ? { ...employee, ...action.payload.updates } : employee
        ),
      };
    default:
      return state;
  }
}

// Context 
const EmployeeContext = createContext(initialState);

// Provider Component
function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  // Use useEffect to write to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(state));
  }, [state]);

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export {EmployeeContext,EmployeeProvider}
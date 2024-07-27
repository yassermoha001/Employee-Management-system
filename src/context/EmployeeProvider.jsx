import React, { createContext, useReducer } from 'react';
import { getEmployees, saveEmployees } from '../utils/localStorage';

const initialState = {
    employees: getEmployees(),
};

export const EmployeeContext = createContext(initialState);

const employeeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            const updatedEmployees = [...state.employees, action.payload];
            saveEmployees(updatedEmployees);
            return {
                ...state,
                employees: updatedEmployees,
            };
        case 'DELETE_EMPLOYEE':
            const filteredEmployees = state.employees.filter((emp, index) => index !== action.payload);
            saveEmployees(filteredEmployees);
            return {
                ...state,
                employees: filteredEmployees,
            };
        default:
            return state;
    }
};

export const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState);

    return (
        <EmployeeContext.Provider value={{ state, dispatch }}>
            {children}
        </EmployeeContext.Provider>
    );
};

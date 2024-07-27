export const getEmployees = () => {
    const employees = localStorage.getItem('employees');
    return employees ? JSON.parse(employees) : [];
};

export const saveEmployees = (employees) => {
    localStorage.setItem('employees', JSON.stringify(employees));
};

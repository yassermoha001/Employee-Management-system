import React from 'react';
import HomePage from './Pages/HomePage';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeeList';
// import HomePage from './Pages/HomePage';
// import AddEmployeePage from './Pages/AddEmployeePage';
// import ViewEmployeePage from './Pages/ViewEmployeePage';
// import { EmployeeProvider } from './context/EmployeeProvider';
// import { Route, Router } from 'react-router-dom';

const App = () => {
    return (
        // <Router>
        //     <EmployeeProvider>
        //             <Route exact path="/" component={HomePage} />
        //             <Route path="/add" component={AddEmployeePage} />
        //             <Route path="/view/:id" component={ViewEmployeePage} />
        //             {/* <Route path="/edit/:id" component={EditEmployeePage} /> */}
        //     </EmployeeProvider>
        // </Router>
        <div>
          <EmployeeForm/>
        
        </div>
    );
};

export default App;

import React, {Fragment} from 'react';
import './App.css';

// components
import StudentsPage from './components/students/StudentsPage'


function App() {
  return (
    <Fragment>
      <div className="container">
        <StudentsPage />
      </div>
    </Fragment>
  )
}

export default App;

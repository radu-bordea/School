import React, {Fragment} from 'react';
import './App.css';

// components

import InputStudent from './components/InputStudent';
import ListStudents from './components/ListStudent';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputStudent />
        <ListStudents />
      </div>
    </Fragment>
  )
}

export default App;

import React from 'react';
import styles from './App.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
       <Routes>
          <Route 
            path = "/" 
            element = {<Login authService={authService}/>} />
          <Route 
            exact path = "/maker" 
            element = {<Maker authService={authService}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

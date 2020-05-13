import React from 'react';
//import { AddResource } from './components/add-resource-form/add-resource.component'
import { MainPage } from './components/main-page/main-page.component';
import { NavBar } from './components/navbar/navbar.component';
import { Route } from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/' component={MainPage} />
    </div>
  );
}

export default App;

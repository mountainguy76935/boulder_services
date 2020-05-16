import React from 'react';
import { MainPage } from './pages/main-page/main-page.component';
import { AdminResourcePage } from './pages/admin-resource-page.component';
import { ResourcesPage } from './pages/resources-page.component';
import AddResource from './components/add-resource-form/add-resource.component';
import { LoginPage } from './pages/login-page/login-page.component'; 
import { AboutPage } from './pages/about-page.component'
import { NavBar } from './components/navbar/navbar.component';
import { Route, withRouter, Switch } from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/resources' component={ResourcesPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/edit-resource' component={AddResource} />
          <Route exact path="/admin-resources" component={AdminResourcePage} />
        </Switch>
    </div>
  );
}

export default withRouter(App);

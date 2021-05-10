import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Add_User from './Context/Add_User';
import { ContxtProvider } from './Context/ContextGlobal';
import Users from './Context/Users';
import Edit_User from './Context/Edit_User';


const App = () => {
  return (
    <ContxtProvider>
    <div className="App">
    <h1>Crud Operation</h1>
    <Router>
    <Route exact path='/' component={Users}/>
    <Route path='/add_user' component={Add_User}/>
    <Route path="/edit_user/:id" component={Edit_User}/>
    </Router>
  </div>
  </ContxtProvider>
  );
};

export default App;
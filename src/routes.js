import React from 'react';

//Route
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Pages
import {Cadastro} from './components/pages/Cadastro';
import {EditUser} from './components/pages/EditUser';
import {AddUser} from './components/pages/AddUser';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Cadastro} />
        <Route path="/add" component={AddUser}/>
        <Route path="/edit/:id" component={EditUser}/>
      </Switch>
    </BrowserRouter>
  )
}

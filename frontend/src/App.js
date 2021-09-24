import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Login from './screens/AuthScreens/Login/Login';
import ChangePassword from './screens/AuthScreens/ChangePassword/ChangePassword';
import RecoverPassword from './screens/AuthScreens/RecoverPassword/RecoverPassword';
import Dashboard from './screens/Dashboard/Dashboard';


function App() {
  
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/change-password" component={ChangePassword} />
              <Route exact path="/recover-password" component={RecoverPassword} />
              <Route 
                exact path="/dashboard" 
                render={(props)=>
                  (<Dashboard 
                    {...props} 
                      arrLinks={['home']}
                    />)}
                />
            </Switch>   
      </Router>
    </div>
  );
}

export default App;
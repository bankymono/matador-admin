import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Settings from './screens/Settings/Settings';
import TransactionsList from './screens/TransactionsList/TransactionsList';
import ProjectsList from './screens/ProjectsList/ProjectsList';
import ProjectDetails from './screens/ProjectDetails/ProjectDetails';
import UserInfo from './screens/UserInfo/UserInfo';

import Login from './screens/AuthScreens/Login/Login';
import ChangePassword from './screens/AuthScreens/ChangePassword/ChangePassword';
import RecoverPassword from './screens/AuthScreens/RecoverPassword/RecoverPassword';
import Dashboard from './screens/Dashboard/Dashboard';
import CreateProject from './screens/CreateProject/CreateProject';


function App() {
  
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path="/" component={Login} />
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

              <Route 
                exact 
                path='/investors/info'
                render={(props)=>
                  (<UserInfo 
                    {...props} 
                      arrLinks={['home','investors','info']}
                    />)} 
              />
              <Route 
                  exact 
                  path='/projects'
                  render={(props)=>
                    (<ProjectsList 
                      {...props} 
                        arrLinks={['home','projects']}
                        />)}
                  />
              <Route 
                  exact 
                  path='/projects/new'
                  render={(props)=>
                    (<CreateProject 
                      {...props} 
                        arrLinks={['home','projects', 'new']}
                        />)}
                  />
              <Route 
                  exact 
                  path='/projects/id'
                  render={(props)=>
                    (<ProjectDetails
                      {...props} 
                        arrLinks={['home','projects','project name']}
                      />)} 
                />
                <Route 
                  exact 
                  path='/transactions'
                  render={(props)=>
                    (<TransactionsList 
                      {...props} 
                        arrLinks={['home','transactions']}
                        />)}
                  />
                <Route 
                  exact 
                  path='/settings'
                  render={(props)=>
                    (<Settings
                      {...props} 
                        arrLinks={['home','settings']}
                      />)} 
                  />  
            </Switch>   
      </Router>
    </div>
  );
}

export default App;
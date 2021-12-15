import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Settings from './screens/Settings/Settings';
import TransactionsList from './screens/TransactionsList/TransactionsList';
import ProjectsList from './screens/ProjectsList/ProjectsList';
import ProjectDetails from './screens/ProjectDetails/ProjectDetails';
import UserInfo from './screens/UserInfo/UserInfo';
import User from './screens/Users/User';

import Login from './screens/AuthScreens/Login/Login';
import ChangePassword from './screens/AuthScreens/ChangePassword/ChangePassword';
import RecoverPassword from './screens/AuthScreens/RecoverPassword/RecoverPassword';
import Dashboard from './screens/Dashboard/Dashboard';
import CreateProject from './screens/CreateProject/CreateProject';
import CreateProjectTwo from './screens/CreateProjectTwo/CreateProjectTwo';
import CreateAdmin from './screens/CreateAdmin/CreateAdmin';
import AdminList from './screens/AdminList/AdminList';
import MarketPlace from './screens/MarketPlace/MarketPlace';
import Rewards from './screens/Rewards/Rewards';
import InterestRate from './screens/InterestRate/InterestRate';
import UpdateAdmin from './screens/UpdateAdmin/UpdateAdmin';
import UpdatePassword from './screens/UpdatePassword/UpdatePassword';
import { useSelector } from 'react-redux';
import Accounts from './screens/Accounts/Accounts';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Investments from './screens/Investments/Investments';
import FixedIncomeInvestment from './screens/FixedIncomeInvestment/FixedIncomeInvestments';
import EquityInvestment from './screens/EquityInvestment/EquityInvestment';
import SoleInvestment from './screens/SoleInvestment/SoleInvestment';
import VerificationIdList from './screens/VerificationIdList/VerificationIdList';
import ProjectDependencyList from './screens/ProjectDependencyList/ProjectDependencyList';
import ProjectDependencies from './screens/ProjectDependencies/ProjectDependencies';


function App() {
  // const dispatch = useDispatch()
  const adminLogin = useSelector(state => state.adminLogin);
  const { adminInfo } = adminLogin;

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Switch>
          <Route
            exact path="/login"
            render={(props) =>
              !adminInfo ?
                (<Login
                  {...props}
                />)
                : (<Redirect
                  to="/"
                />)
            }
          />

          <Route exact path="/change-password" component={ChangePassword} />
          <Route exact path="/recover-password" component={RecoverPassword} />
          <Route
            exact path="/"
            render={(props) =>
              adminInfo ?
                (<Dashboard
                  {...props}
                  arrLinks={['home']}
                  adminInfo={adminInfo}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />

          <Route
            exact path="/investments"
            render={(props) =>
              adminInfo ?
                (<Investments
                  {...props}
                  arrLinks={['home', 'investments']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />

          <Route
            exact path="/investments/equity"
            render={(props) =>
              adminInfo ?
                (<EquityInvestment
                  {...props}
                  arrLinks={['home', 'investments', 'equity investment']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact path="/investments/fixed-income"
            render={(props) =>
              adminInfo ?
                (<FixedIncomeInvestment
                  {...props}
                  arrLinks={['home', 'investments', 'fixed income']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />

          <Route
            exact path="/investments/fixed-income/sole"
            render={(props) =>
              adminInfo ?
                (<SoleInvestment
                  {...props}
                  arrLinks={['home', 'investments', 'fixed income', "sole"]}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/investors'
            render={(props) =>
              adminInfo ?
                (<User
                  {...props}
                  arrLinks={['home', 'investors']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/investors/info'
            render={(props) =>
              adminInfo ?
                (<UserInfo
                  {...props}
                  arrLinks={['home', 'investors', 'info']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/projects'
            render={(props) =>
              adminInfo ?
                (<ProjectsList
                  {...props}
                  arrLinks={['home', 'projects']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/projects/new'
            render={(props) =>
              adminInfo ?
                (<CreateProjectTwo
                  {...props}
                  arrLinks={['home', 'projects', 'new']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/projects/new-2'
            render={(props) =>
              adminInfo ?
                (<CreateProject
                  {...props}
                  arrLinks={['home', 'projects', 'new']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/projects/id'
            render={(props) =>
              adminInfo ?
                (<ProjectDetails
                  {...props}
                  arrLinks={['home', 'projects', 'project name']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/transactions'
            render={(props) =>
              adminInfo ?
                (<TransactionsList
                  {...props}
                  arrLinks={['home', 'transactions']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/settings'
            render={(props) =>
              adminInfo ?
                (<Settings
                  {...props}
                  arrLinks={['home', 'settings', 'investment']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />

          <Route
            exact
            path='/settings/market-place'
            render={(props) =>
            (adminInfo?
            <MarketPlace
              {...props}
              arrLinks={['home', 'settings', 'market place']}
            /> :
            <Redirect to="/login" />)}
          />
          <Route
            exact
            path='/settings/rewards'
            render={(props) =>
              adminInfo ?
                (<Rewards
                  {...props}
                  arrLinks={['home', 'settings', 'reward']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />

              <Route 
                exact 
                path='/investors/info'
                render={(props)=>
                  adminInfo ?
                  (<UserInfo 
                    {...props} 
                      arrLinks={['home','investors','info']}
                    />)
                    :(<Redirect
                      to="/login"
                     />)
                  } 
              />
              <Route 
                  exact 
                  path='/projects'
                  render={(props)=>
                    adminInfo ?
                    (<ProjectsList 
                      {...props} 
                        arrLinks={['home','projects']}
                        />)
                        :(<Redirect
                          to="/login"
                         />)
                      }
                  />

                  <Route 
                    exact 
                    path='/project-dependencies'
                    render={(props)=>
                      adminInfo ?
                      (<ProjectDependencies
                        {...props} 
                        arrLinks={['home','project dependencies']}
                         />)
                        :(<Redirect
                          to="/login"
                         />)
                        }
                    />
                      <Route 
                    exact 
                    path='/project-dependencies/:id'
                    render={(props)=>
                      adminInfo ?
                      (<ProjectDependencyList
                        {...props} 
                        arrLinks={['home','project dependencies']}
                         />)
                        :(<Redirect
                          to="/login"
                         />)
                        }
                    />
                <Route 
                  exact 
                  path='/projects/new'
                  render={(props)=>
                    adminInfo ?
                    (<CreateProjectTwo 
                      {...props} 
                        arrLinks={['home','projects', 'new']}
                        />)
                        :(<Redirect
                          to="/login"
                         />)
                      }
                  />
                <Route 
                  exact 
                  path='/projects/new-2'
                  render={(props)=>
                    adminInfo ?
                    (<CreateProject
                      {...props} 
                        arrLinks={['home','projects', 'new']}
                        />)
                        :(<Redirect
                          to="/login"
                         />)
                      }
                  />
              <Route 
                  exact 
                  path='/projects/id'
                  render={(props)=>
                    adminInfo ?
                    (<ProjectDetails
                      {...props} 
                        arrLinks={['home','projects','project name']}
                      />)
                      :(<Redirect
                        to="/login"
                       />)
                    } 
                />
                <Route 
                  exact 
                  path='/transactions'
                  render={(props)=>
                    adminInfo ?
                    (<TransactionsList 
                      {...props} 
                        arrLinks={['home','transactions']}
                        />)
                        :(<Redirect
                          to="/login"
                         />)
                      }
                  />

                <Route 
                  exact 
                  path='/id-verification'
                  render={(props)=>
                    adminInfo ?
                    (<VerificationIdList  
                      {...props} 
                        arrLinks={['home','ID verification']}
                        />)
                        :(<Redirect
                          to="/login"
                         />)
                      }
                  />
                <Route 
                  exact 
                  path='/settings'
                  render={(props)=>
                    (<Settings
                      {...props} 
                        arrLinks={['home','settings','investments']}
                      />)} 
                  />  
          <Route
            exact
            path='/settings/interest-rate'
            render={(props) =>
              adminInfo ?
                (<InterestRate
                  {...props}
                  arrLinks={['home', 'settings', 'interest rate']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />

          <Route
            exact
            path='/settings/admin-manager'
            render={(props) =>
              adminInfo ?
                (<AdminList
                  {...props}
                  arrLinks={['home', 'settings', 'admin manager']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />

          <Route
            exact
            path='/settings/admin-manager/create-admin'
            render={(props) =>
            (<CreateAdmin
              {...props}
              arrLinks={['home', 'settings', 'admin-manager', 'create']}
            />)}
          />

          <Route
            exact
            path='/settings/admin-manager/update-admin'
            render={(props) =>
              adminInfo ?
                (<UpdateAdmin
                  {...props}
                  arrLinks={['home', 'settings', 'admin manager', 'update']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />
          <Route
            exact
            path='/settings/update-password'
            render={(props) =>
              adminInfo ?
                (<UpdatePassword
                  {...props}
                  arrLinks={['home', 'settings', 'update password']}
                />)
                : (<Redirect
                  to="/login"
                />)
            }
          />

          <Route
            exact
            path='/accounts'
            render={(props) =>
            (<Accounts
              {...props}
              arrLinks={['home', 'Accounts / Deposit Method']}
            />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
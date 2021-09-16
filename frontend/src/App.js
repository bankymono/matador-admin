import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import UserInfo from './screens/UserInfo/UserInfo';

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
                <Route 
                  exact 
                  path='/investors/info'
                  render={(props)=>
                    (<UserInfo 
                      {...props} 
                        arrLinks={['home','investors','info']}
                      />)} 
                  />
            </Switch>   
      </Router>
    </div>
  );
}

export default App;

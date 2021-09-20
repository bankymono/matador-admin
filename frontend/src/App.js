import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Settings from './screens/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
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

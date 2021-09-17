import './App.css';
import ProjectDetails from './screens/ProjectDetails/ProjectDetails';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
                <Route 
                  exact 
                  path='/projects/id'
                  render={(props)=>
                    (<ProjectDetails
                      {...props} 
                        arrLinks={['home','projects','project name']}
                      />)} 
                  />
            </Switch>   
      </Router>
    </div>
  );
}

export default App;

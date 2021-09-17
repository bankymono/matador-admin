import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import TransactionsList from './screens/TransactionsList/TransactionsList';

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
                <Route 
                  exact 
                  path='/transactions'
                  render={(props)=>
                    (<TransactionsList 
                      {...props} 
                        arrLinks={['home','transactions']}
                      />)} 
                  />
            </Switch>   
      </Router>
    </div>
  );
}

export default App;

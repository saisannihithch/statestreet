import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TransactionList from './views/transactionList';
import TransactionDetails from './views/transactionDetails';
import './App.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route component={TransactionList} exact path="/" />
            <Route component={TransactionDetails} path="/:accountNumber" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import  {Provider} from 'react-redux'
import store from "./store";
import AppNavbar from "./components/layout/AppNavbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
      <Provider store={store}>
      <Router>
    <div className="App">
      <AppNavbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />

        </Switch>
      </div>
    </div>
      </Router>
      </Provider>
  );
}

export default App;

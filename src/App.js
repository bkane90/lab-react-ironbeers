import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


function App() {
  return (
    <div className="App">
      <Link to="/beers">Beers</Link> &nbsp;
      <Link to="/random-beer">New Beer</Link> &nbsp;
      <Link to="/new-beer">Random Beer</Link> &nbsp;

      <Switch>
      <Route exact path="/" render={(props) => {
        return (
          <h1>HOME SCREEN</h1>
        )
      }} />
        <Route exact path="/beers" render={(props) => <Beers {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />
        <Route exact path="/new-beers" render={(props) => <NewBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

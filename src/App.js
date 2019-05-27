import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import VendingMachine from './Components/VendingMachine';
import Nonfiction from './Components/Nonfiction'
import Fiction from './Components/Fiction'
import SciFi from './Components/SciFi'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <VendingMachine />
      <Switch>
        <Route exact path="/nonfiction" render={() => <Nonfiction />} />
        <Route exact path="/fiction" render={() => <Fiction />} />
        <Route exact path="/sci-fi" render={() => <SciFi />} />
      </Switch>
      
    </div>
  );
}

export default App;

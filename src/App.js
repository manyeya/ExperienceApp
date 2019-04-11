import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;

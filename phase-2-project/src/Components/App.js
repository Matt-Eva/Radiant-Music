import React from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import Header from "./Header"
import AddForm from './AddForm';
import NavBar from './NavBar';
import Home from './Home';
import Instruments from './Instruments';
import Accessories from './Accessories';
import Albums from './Albums';

function App() {
  return (
    <div className="App">
      <Header />
      <AddForm />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/instruments">
          <Instruments />
        </Route>
        <Route exact path="/accessories">
          <Accessories />
        </Route>
        <Route exact path="/albums">
          <Albums />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
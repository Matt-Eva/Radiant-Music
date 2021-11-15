import React from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import Header from "./Header"
import AddForm from './AddForm';
import NavBar from './NavBar';
import DisplayContainer from './DisplayContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <AddForm />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <DisplayContainer />
        </Route>
        <Route exact path="/instruments">
          <DisplayContainer />
        </Route>
        <Route exact path="/accessories">
          <DisplayContainer />
        </Route>
        <Route exact path="/albums">
          <DisplayContainer />
        </Route>
        <Route>
          404 Page Does Not Exist
        </Route>
      </Switch>
    </div>
  );
}

export default App;
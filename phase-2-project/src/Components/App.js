import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import Header from "./Header"
import AddForm from './AddForm';
import NavBar from './NavBar';
import DisplayContainer from './DisplayContainer';

function App() {
  const baseUrl = "http://localhost:4000/resources";
  const [allData, setAllData] = useState([])
  
  const instruments = allData.filter(data => data.type === "instruments")
  const accessories = allData.filter(data => data.type === "accessories")
  const albums = allData.filter(data => data.type === "albums")

  useEffect(() =>{
    fetch(baseUrl)
    .then(r => r.json())
    .catch(error => console.error(error))
    .then(data => {
      setAllData([...data])
    })
  }, [])

  const addMerch= (item) =>{
    console.log(item)
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }

    fetch(baseUrl, configObj)
    .then(r => r.json())
    .catch(error => console.error(error))
    .then(data => {
      setAllData([...allData, data])
    })
  }

  return (
    <div className="App">
      <Header />
      <AddForm instruments={instruments} accessories={accessories} albums={albums} addMerch={addMerch}/>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <DisplayContainer displayData={allData} pathName="all"/>
        </Route>
        <Route exact path="/instruments">
          <DisplayContainer displayData={instruments} pathName="instruments"/>
        </Route>
        <Route exact path="/accessories">
          <DisplayContainer displayData={accessories} pathName="accessories"/>
        </Route>
        <Route exact path="/albums">
          <DisplayContainer displayData={albums} pathName="albums"/>
        </Route>
        <Route>
          404 Page Does Not Exist
        </Route>
      </Switch>
    </div>
  );
}

export default App;
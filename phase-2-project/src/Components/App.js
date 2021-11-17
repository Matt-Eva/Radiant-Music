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
  const [cart, setCart] = useState([])
  
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

  const handleCartAdd = (item) => {

    item.stock -= 1

    const configObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }

    fetch(baseUrl + `/${item.id}`, configObj)
    .then(res => res.json())
    .then(data =>{
      const updatedArray = allData.map(item => item.id === data.id ? data : item)
      setAllData([...updatedArray])
      setCart([...cart, data])
      alert(`${item.title} added to cart! :)`)
    })
}

  return (
    <div className="App">
      <Header cart={cart}/>
      <AddForm instruments={instruments} accessories={accessories} albums={albums} addMerch={addMerch}/>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <DisplayContainer displayData={allData}  handleCartAdd={handleCartAdd} pathName="all merch"/>
        </Route>
        <Route exact path="/instruments">
          <DisplayContainer displayData={instruments}  handleCartAdd={handleCartAdd} pathName="instruments"/>
        </Route>
        <Route exact path="/accessories">
          <DisplayContainer displayData={accessories}  handleCartAdd={handleCartAdd} pathName="accessories"/>
        </Route>
        <Route exact path="/albums">
          <DisplayContainer displayData={albums} handleCartAdd={handleCartAdd} pathName="albums"/>
        </Route>
        <Route>
          404 Page Does Not Exist
        </Route>
      </Switch>
    </div>
  );
}

export default App;
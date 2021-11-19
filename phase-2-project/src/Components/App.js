import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import Header from "./Header"
import AddForm from './AddForm';
import NavBar from './NavBar';
import CartPopup from "./CartPopup";
import DisplayContainer from './DisplayContainer';
import styled from "styled-components";
import { ThemeProvider } from "styled-components"

function App() {
  const baseUrl = "http://localhost:4000/resources";
  const [allData, setAllData] = useState([])
  const [cart, setCart] = useState([])
  const [sort, setSort] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [count, setCount] = useState(0)

  // console.log(cart)
  
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
      const cartItem = {...data, count: count}
      setCart([...cart, cartItem])
      setCount(count => count + 1)
      alert(`${item.title} added to cart! :)`)
    })
}

const removeFromCart = (item) =>{
  const inStockItem = allData.filter(merch => merch.id === item.id )

  const newStock ={
    stock: [...inStockItem][0].stock + 1
  }
  
  const configObj = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newStock)
}

fetch(baseUrl + `/${item.id}`, configObj)
.then(res => res.json())
.then(data =>{
  const updatedArray = allData.map(item => item.id === data.id ? data : item)
  setAllData([...updatedArray])

  const smallCart = cart.filter(thing => thing.count !== item.count)
  setCart([...smallCart])
})
}

const setSelected = (cat, bool) => {
  if(bool){
      setSort([...sort, cat])
  } else {
      const oneLess = sort.filter(element => element !== cat)
      setSort(oneLess)
  }
}

function emptySort() {
  setSort([])
}

const handleAddStock = (item, value) => {
    const numValue = parseInt(value)
    item.stock += numValue

    if(item.stock < 0){
      item.stock = 0
    }

    const configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }

    fetch(baseUrl + `/${item.id}`, configObj)
    .then(res => res.json())
    .then(data => {
      const addedStock = allData.map(item => item.id === data.id ? data : item)
      setAllData([...addedStock])
    })
}


  const handleDelete = (id) => {
    
    fetch(baseUrl + `/${id}`, {
      method: 'DELETE'
    })
    .then(() =>{
      const deletedItemArray = allData.filter(item => item.id !== id)
      setAllData([...deletedItemArray])
    })
  }

  function toggleCart(){
    setShowCart(showCart => !showCart)
  }

  return (
    <ThemeProvider theme={theme}>
    {showCart && <CartPopup toggleCart={toggleCart} cart={cart} removeFromCart={removeFromCart}/>}
    <AppBody>
      <Header cart={cart} toggleCart={toggleCart}/>
      <AddForm instruments={instruments} accessories={accessories} albums={albums} addMerch={addMerch}/>
      <NavBar emptySort={emptySort}/>
      <Switch>
        <Route exact path="/">
          <DisplayContainer displayData={allData} handleAddStock={handleAddStock} handleCartAdd={handleCartAdd} sort={sort} setSelected={setSelected} handleDelete={handleDelete} pathName="all merch"/>
        </Route>
        <Route exact path="/instruments">
          <DisplayContainer displayData={instruments} handleAddStock={handleAddStock} handleCartAdd={handleCartAdd} sort={sort} setSelected={setSelected} handleDelete={handleDelete} pathName="instruments"/>
        </Route>
        <Route exact path="/accessories">
          <DisplayContainer displayData={accessories} handleAddStock={handleAddStock} handleCartAdd={handleCartAdd} sort={sort} setSelected={setSelected} handleDelete={handleDelete} pathName="accessories"/>
        </Route>
        <Route exact path="/albums">
          <DisplayContainer displayData={albums} handleAddStock={handleAddStock} handleCartAdd={handleCartAdd} sort={sort} setSelected={setSelected} handleDelete={handleDelete} pathName="albums"/>
        </Route>
        <Route>
          404 Page Does Not Exist
        </Route>
      </Switch>
    </AppBody>
    </ThemeProvider>
  );
}

export default App;

const AppBody = styled.div`

      font-family: Verdana;
      text-align: center;



      button {
        cursor: pointer;
      }
`

const theme={
  color: {
    headers: "hsl(30, 100%, 80%)"
  },
  backgroundColor: {
    headers: "hsl(210, 50%, 20%)"
  }
}
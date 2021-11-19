import { useState } from "react"
import styled from "styled-components"

const MerchCard = ({item, handleCartAdd, handleAddStock, handleDelete}) => {
    
    const [addStock, setAddStock] = useState('')
    const [checked, setChecked] = useState(false)

    const {title, price, stock, image, id} = item
        
    const handleSubmit = (e) => {
        e.preventDefault()
        setAddStock('')
        handleAddStock(item, addStock)
    }

    return (
        <CardDiv>
            {/* {stock === 0 ? <OutStockP>OUT OF STOCK</OutStockP> : null} */}
            <img src={image} alt={title}/>
            <h4 style={{margin: "0px"}} title={title}>{title}</h4>
            <p>${price}</p>
            <p>Number In Stock: {stock}</p>
            {stock === 0 ? <OutStockP>OUT OF STOCK</OutStockP> : <button onClick={() => handleCartAdd(item)}>Add to Cart</button>}
            <form onSubmit={handleSubmit}>
                <StockInput type="number" value={addStock} onChange={(e) => setAddStock(e.target.value)}/>
                {addStock === '' ? <button disabled>Add Stock</button> : <button type="submit">Add Stock</button>}
            </form>
            <input type = "checkbox" onChange={() => setChecked(!checked)} checked={checked}></input>
            {checked ? <button onClick={() => handleDelete(id)}>Remove From Inventory</button> : <button disabled>Remove from Inventory</button>}
        </CardDiv>
    )
}

export default MerchCard;

const CardDiv = styled.div`

  margin: 10px 2.5% 10px 2.5%;
  padding: 5px 5px 5px 5px;
  width: calc(20% - 10px);
  height: 300px;
  /* border: solid;
  border-width: 1px; */
  border-radius: 5px;
  border-color: black;
  background-color: hsl(0, 0%, 98%);
  transition: background-color 500ms, border-color 500ms;
  box-shadow: 3px 3px 4px hsl(0, 0%, 85%);
  z-index: 0;
  // text-align: center;

  button{
      margin: 5px 2px 5px 2px;
  }

h4{
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

img{
  max-width: 180px;
  height: 100px;
}
`

const StockInput = styled.input`
width: 40px;
`

const OutStockP = styled.p`
background-color: red;



margin: 0%, 200px, 0%, 0px;
// width: 200px;
//    background-color: red;

// text-align: center;

`
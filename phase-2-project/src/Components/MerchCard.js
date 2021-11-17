import { useState } from "react"

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
        <div className="merchcard">
            {stock === 0 ? <p style={{position: "absolute", marginTop: "3%", marginLeft: "3%", backgroundColor: "red"}}>OUT OF STOCK</p> : null}
            <img src={image} alt={title}/>
            <h4 style={{margin: "0px"}} title={title}>{title}</h4>
            <p>${price}</p>
            <p>Number In Stock: {stock}</p>
            {stock === 0 ? <button disabled>Add to Cart</button> : <button onClick={() => handleCartAdd(item)}>Add to Cart</button>}
            <form onSubmit={handleSubmit}>
                <input type="number" className="add-stock" value={addStock} onChange={(e) => setAddStock(e.target.value)}/>
                {addStock === '' ? <button disabled>Add Stock</button> : <button type="submit">Add Stock</button>}
            </form>
            <input type = "checkbox" onChange={() => setChecked(!checked)} checked={checked}></input>
            {checked ? <button onClick={() => handleDelete(id)}>Remove From Inventory</button> : <button disabled>Remove from Inventory</button>}
        </div>
    )
}

export default MerchCard;


const MerchCard = ({item, handleCartAdd}) => {
    const {title, price, stock, image='https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_400,h_264/https://myfavoritetherapists.com/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png'} = item

    // function handleStockChange({item}){
    //     const {type, stock, id} = item
    //     fetch(baseUrl + `/${type}/${id}`)
    // }
        
    

    return (
        <div className="merchcard">
            {stock === 0 ? <p style={{position: "absolute", marginTop: "3%", marginLeft: "3%", backgroundColor: "red"}}>OUT OF STOCK</p> : null}
            <img src={image} alt={title}/>
            <h4 style={{margin: "0px"}} title={title}>{title}</h4>
            <p>${price}</p>
            <p>Number In Stock: {stock}</p>
            {stock === 0 ? <button disabled>Add to Cart</button> : <button onClick={() => handleCartAdd(item)}>Add to Cart</button>}
            <form>
                <label>Add Stock</label>
                <input type="number" className="add-stock"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MerchCard;
import styled from "styled-components";

function CartPopup({toggleCart, cart, removeFromCart}){
    const cartItems = cart.map(item => <li key={item.count}>
        {item.title}: ${item.price}   
        <button onClick={() => removeFromCart(item)}>Remove Item</button>
        </li>)
    return(
        <PopupDiv>
            <div>
                <span onClick={toggleCart}>X</span>
                <br />
                <h4>In Cart:</h4>
                {cart.length === 0 ? <p>No Items In Cart</p> : null}
                <ul>
                    {cartItems}
                </ul>
            </div>
        </PopupDiv>
    )
}

export default CartPopup;

const PopupDiv = styled.div`
position: fixed;
width: 100%;
height: 100vh;
background: #00000050;
overflow: hidden;
z-index: 1;

    ul{
        text-align: left;
    }

    button{
        margin: 0px 0px 10px 10px;
        font-size: 10px;
        text-align: center;
    }

    div{
        background: white;
        min-height: 200px;
        margin: 25% 25% 25% 25%;
        border-radius: 10px;
        z-index: 1;
    }

    div span{
        margin: 5px 5px 5px 0px;
        float: right;
        display: inline;
    }
`
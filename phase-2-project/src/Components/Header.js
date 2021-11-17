import { Link } from "react-router-dom"

const Header = ({cart}) =>{


    return (
        <div className="header">
        <h1>
            <Link to="/" className="headlink"> Radiant Music</Link>
        </h1>
        <p>🛒: {cart.length} items in cart</p>
        </div>
    )
}

export default Header;

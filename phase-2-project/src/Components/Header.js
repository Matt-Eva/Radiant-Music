import { Link } from "react-router-dom"

const Header = () =>{
    return (
        <div className="header">
        <h1>
            <Link to="/" className="headlink"> Radiant Music</Link>
        </h1>
        </div>
    )
}

export default Header;

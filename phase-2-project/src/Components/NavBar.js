import { NavLink } from "react-router-dom";

const NavBar = ({emptySort}) =>{
    return (
        <div className="navbar">
            <NavLink exact to="/instruments" onClick={emptySort} >Instruments</NavLink>
            <NavLink exact to="/accessories" onClick={emptySort} >Accessories</NavLink>
            <NavLink exact to="/albums" onClick={emptySort} >Albums</NavLink>
        </div>
    )
}

export default NavBar;
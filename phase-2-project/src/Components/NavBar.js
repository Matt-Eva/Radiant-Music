import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return (
        <div className="navbar">
            <NavLink exact to="/instruments">Instruments</NavLink>
            <NavLink exact to="/accessories">Accessories</NavLink>
            <NavLink exact to="/albums">Albums</NavLink>
        </div>
    )
}

export default NavBar;
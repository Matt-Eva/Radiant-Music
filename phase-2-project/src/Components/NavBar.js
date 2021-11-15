import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return (
        <>
        <NavLink exact to="/instruments">Instruments</NavLink>
        <NavLink exact to="/accessories">Accessories</NavLink>
        <NavLink exact to="/albums">Albums</NavLink>
        </>
    )
}

export default NavBar;
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = ({emptySort}) =>{
    return (
        <NavDiv>
            <NavLink exact to="/instruments" onClick={emptySort} >Instruments</NavLink>
            <NavLink exact to="/accessories" onClick={emptySort} >Accessories</NavLink>
            <NavLink exact to="/albums" onClick={emptySort} >Albums</NavLink>
        </NavDiv>
    )
}

export default NavBar;

const NavDiv = styled.div`

background-color: ${props => props.theme.backgroundColor.headers};

margin: 10px 20% 10px 20%;
border-radius: 5px;

a {
  margin: 0px 10px 0px 10px;
  padding: 5px 5px 5px 5px;
  font-size: 30px;
  text-decoration: none;
  transition: color 500ms;
  color: white;
}

a:visited {
  color: white;
}

a:hover {
  color: ${props => props.theme.color.headers};
}

`
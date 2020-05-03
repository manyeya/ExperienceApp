import React from 'react'
import { NavLink} from "react-router-dom";
// import styled from 'styled-components';

// // const Container = styled.div`
// // display:flex;
// // `
function NavBar() {
    return (
        <div className="header">
            <NavLink to="/" exact activeStyle={{fontWeight:"bold",color:"red"}}>Home</NavLink>
            <NavLink to="/about" exact activeStyle={{fontWeight:"bold",color:"red"}}>About</NavLink>
        </div>
    )
}

export default NavBar

import React from 'react'
import { Link} from "react-router-dom";
import styled from 'styled-components';

// const Container = styled.div`
// display:flex;
// `
function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default NavBar

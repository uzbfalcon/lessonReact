import { NavLink } from "react-router-dom";
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background-color: black;
    height: 55px;
    color: white;
    align-items: center;
    border-radius: 15px;
    .active {
        color: red;
        font-size: 25px;
    }
    .hover {
        box-shadow: 2px 2px 15px red;
    }
`;


const Item = styled(NavLink)`
    color: white;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
`;


export { Container, Item }






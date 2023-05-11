import styled from "styled-components"


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background-color: black;
    height: 55px;
    align-items: center;
    border-radius: 15px;
    text-decoration: none;
    .active {
        color: red;
        font-size: 25px;
    }
    :hover {
        box-shadow: 2px 2px 15px black;
        text-shadow: 1px 1px 1px  white; 
    }
    color: white;
`;


// const NavLink = styled.div`
//     color: white;
//     font-size: 20px;
//     cursor: pointer;
//     text-decoration: none;
//     :hover{
//         text-shadow: 1px 1px 1px  white;
//     }
// `;


export { Container, }






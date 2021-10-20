import React,{useState} from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaMagento } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [click,setClick] = useState(false)
    const handleClick = () =>setClick(!click);

    return (
        
        <IconContext.Provider value={{ color: 'black' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >
                        <NavIcon />
                        Feliz Zoe
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes />:<FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/" >
                        Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/validate" >
                        Validating
                        </NavLinks>
                    </NavItem>
                   
                  
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        
    )
}

const Nav = styled.nav `
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
  color:whitesmoke
`;

const NavbarContainer  = styled(Container) `
display: flex;
height: 80px;
justify-content: space-between;

${Container}

`;
const NavLogo = styled(Link)`
 color: black;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
 
  
`
const NavIcon= styled(FaMagento) `
 margin-right: 0.5rem;
 

 

`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
 
    
    top: 70px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: whitesmoke;
  }
`;

const NavItem = styled.li`
  height: 70px;
  border-bottom: 2px solid transparent;

  
  &:hover {
    border-bottom: 2px solid red;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    color: black;
    display: table;
    &:hover {
      color: red;
      transition: all 0.3s ease;
    }
  }
`;
 /* const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;
const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`; */








export default Navbar;

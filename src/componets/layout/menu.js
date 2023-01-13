import React from 'react'
import { Navbar ,Nav , NavDropdown, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

 const Menu = () => {
  
  return (
    <div className='main-menu '>
      <Container >
          <Nav className="justify-content-center">
            <Nav.Link  className='nav-Link' ><Link  to='/category/sports'>sports </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/business'>business </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/world'>world </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/technology'>technology </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/science'>science </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/politics'>politics </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/startup'>startup </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/entertainment'>entertainment </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/miscellaneous'>miscellaneous </Link></Nav.Link>
            <Nav.Link  className='nav-Link' ><Link  to='/category/hatke'>hatke </Link></Nav.Link>
          </Nav>
      </Container>
    </div>
  )
}
export default Menu;
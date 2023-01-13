import React from 'react'
import { Form , Button,  NavDropdown, Container, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons' ;
import{faSearch} from '@fortawesome/free-solid-svg-icons' ;
import  Menu  from "./menu";
import { Link } from 'react-router-dom';
 const Header = () => {
  return (
    <div className='topheader bg-white d-md-block d-none'>
        <Container className='d-flex justify-content-around   p-4'>   
              <Form className="d-flex my-3 ">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className=" "
                      aria-label="Search"
                    />
                    <Button ><FontAwesomeIcon icon={faSearch}/></Button>
            </Form>
                <div className='my-3'>
              
                  <Link  to="/">
                    <img className='logo' src='logo 1.png'/>
                  </Link>
                </div>
           
                <div className='social d-flex my-4 w-25 justify-content-between '>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faFacebookF}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faTwitter} /></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faInstagram}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faLinkedin}/></i>
               </div> 
             
         </Container>
         <Menu/>
    </div>
  )
}
export default Header;
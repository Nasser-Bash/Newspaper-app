import React , {useState} from 'react'
import Mobilemenu from "./mobile-menu";
import { Form , Button,  NavDropdown, Container, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons' ;
import{faSearch,faBars} from '@fortawesome/free-solid-svg-icons' ;
 const Mobileheader = () => {
  const [isActive, setActive] = useState();
        const activemenu = (active)=>{
            setActive(active)
        }
  return (
    <div className='mobile-header bg-white d-md-none d-block'>
                 <Container className='p-4'> 
                <div className='d-flex justify-content-around   '>  
                 <i onClick={()=>activemenu(true)} className='my-2'><FontAwesomeIcon icon={faBars}/></i> 
                <div className='my-2'>
                  <a href='/'>
                  <img className='logo' src='logo 1.png'/>
                  </a>
                </div>
                <div className='social d-flex my-2  w-25 justify-content-between '>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faFacebookF}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faTwitter} /></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faInstagram}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faLinkedin}/></i>
               </div> 
               </div>
               <Form className="d-flex my-3 ">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className=""
                      aria-label="Search"
                    />
                    <Button ><FontAwesomeIcon icon={faSearch}/></Button>
            </Form>
           
         </Container>
         <Mobilemenu active={isActive} onremove={activemenu}/>
    </div>
  )
}
export default Mobileheader;
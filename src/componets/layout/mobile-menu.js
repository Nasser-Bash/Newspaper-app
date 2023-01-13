import React , {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons' ;
import{faTimesCircle} from '@fortawesome/free-solid-svg-icons' ;
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
 const Mobilemenu = ({active,onremove}) => {
  return (
    <div 
    className={active ? 'mobilemenuactive': "mobilemenu"}>
            <div className='close-menu d-flex p-2  bg-white'>
                    <i onClick={()=>onremove(false)} className='mx-2 rounded-pill' ><FontAwesomeIcon icon={faTimesCircle}/></i>
                    <p className=''>Close menu</p>
            </div>
            <Nav className="d-block py-3 text-dark">
            <Link to="/" className='nav-link'>Home</Link>
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
            <div className='social d-flex my-2   justify-content-around '>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faFacebookF}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faTwitter} /></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faInstagram}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faLinkedin}/></i>
               </div> 
    </div>
  )
}
export default Mobilemenu;
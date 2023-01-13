import React from 'react'
import { Container , Row , Col , Form,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF , faInstagram,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons' ;
import Fade from 'react-reveal/Fade';
import  Menu  from "./menu";
import { Link } from 'react-router-dom';
 const Footer = () => {
  return (
    <div className='footer my-auto text-white'>
      <Container className='p-5  text-center text-md-start'>
        <Row>
         
          <Col>
          <Fade>
        <div className='footer1 mb-5'>
        <Link to='/'>
                  <img className='logo' src='logo1-light.png' alt='newspaper'/>
        </Link>
        <p className='my-4'>Culpa consectetur amet nisi excepteur nisi magna. Sint deserunt nulla velit tempor tempor irure duis. Incididunt culpa mollit occaecat fugiat sint eu. Laboris in ex enim aute sint exercitation labore sunt reprehenderit magna qui nulla incididunt laborum.</p>

        <div className='social d-flex   justify-content-around'>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faFacebookF}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faTwitter} /></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faInstagram}/></i>
                        <i href='#' className='nav-link'><FontAwesomeIcon icon={faLinkedin}/></i>
         </div> 
      
      </div>
      </Fade>
      </Col>
   

     
      <Col>
      <Fade>
      <div className='footer2'>
      <div className='Newsletter '>
               <h6 className='title text-center'>subscribe our Newsletter</h6>
               <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
               </div>

       

    </div>
    </Fade>
    </Col>
  
    </Row>
       
          </Container>
          <div className='footer3 text-center text-white px-3 pb-3'>
              <p>Copyright ©2022 All rights reserved | This template is made with  by <strong style={{color:' #f1c40f'}}> Nasser Bash </strong></p>
        </div>
    </div>
   
  )
}
export default Footer;
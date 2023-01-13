import React ,{useState}from 'react'
import {Button , Card  , Col ,Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Zoom';
import { Link } from "react-router-dom";
import { Newscontext } from "../../App";
 const Lastestpost = () => {
  const [limit, setlimit] = useState(3);

  return (
    <Fade>
    <div className='lastestpost my-5 '>
      <h4 className='section-title mb-5 mx-1'>Lastest posts:</h4>
      <Row>     
        <Newscontext.Consumer>
           { (news) => news.slice(0,limit).map((post)=>{
            return(
              <Col lg={4} md={6} className='d-flex justify-content-center mb-3 ' >
          <Fade>
          <Card >
      <Card.Img variant="top" src={post.imageUrl}/>
      <Card.Body className=''>
        <Card.Title>{post.title}</Card.Title>
        <h6 className='text-muted'>{post.date}</h6>
        <span className='read-more'>
        <Link  to='/postpage' >Read more 
        <i>
        <FontAwesomeIcon icon={faArrowRight} /> 
        </i>
        </Link>
        </span>
      </Card.Body>
    </Card>
    </Fade>
              </Col>
              )
           })
           }
        </Newscontext.Consumer>
           
     
  
    {/* <Col lg={4} md={6} className='d-flex justify-content-center mb-3' >
    <Fade>
    <Card >
     
      <Card.Img variant="top" src="images/photo-1478029115463-6371b5133cac.jfif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <span className='read-more'>
        <Link  to='/postpage' >Read more 
        <i>
        <FontAwesomeIcon icon={faArrowRight} /> 
        </i>
        </Link>
        </span>
      </Card.Body>
    </Card>
    </Fade>
    </Col>

    <Col lg={4} md={6} className='d-flex justify-content-center mb-3' >
    <Fade>
    <Card >
     
      <Card.Img variant="top" src="images/photo-1478029115463-6371b5133cac.jfif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <span className='read-more'>
        <Link  to='/postpage' >Read more 
        <i>
        <FontAwesomeIcon icon={faArrowRight} /> 
        </i>
        </Link>
        </span>
      </Card.Body>
    </Card>
    </Fade>
    </Col> */}

    
    </Row>
    </div>
    </Fade>
  )
}
export default Lastestpost;
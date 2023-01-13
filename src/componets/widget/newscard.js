import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Zoom';

 const Newscard = () => {

  return (

        <Col md={6} className="banner-col">
          <Fade>
                <Card className='banner-card'>
                  <Card.Img variant="top" src="images/Free-New-Full-HD-Backgrounds-PixelsTalk.Net.png" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <span className='d-flex justify-content-between'>
                      <p className='post-category p-2'>category</p>
                      <p className='post-date'>22-11-2022</p>
                    </span>
                    <Card.Text>
                      Some quick example
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>         
                </Fade>
                </Col>
  )
}
export default Newscard;
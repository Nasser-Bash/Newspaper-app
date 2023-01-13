import React ,{useState,useEffect} from 'react'
import { Container,Button ,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Comments from "../widget/comments";
import Lastestpost from "../widget/lastestpost";
import axios from "axios";
import { useParams } from "react-router-dom";
 const PostPage = () => {
  
  return (
    <div>
           <h6 className='page-title text-muted text-center p-2'>PostPage</h6>
      <Container>
          
                    <div className='post-details'>
                  <img className='post-feature-img mb-4' src='images/Free-New-Full-HD-Backgrounds-PixelsTalk.Net.png'/>
                <h3 className='post-title'></h3>
                <p>Irure incididunt cupidatat consectetur proident pariatur. Ea do deserunt duis irure aliquip fugiat est. Aute cupidatat quis aliqua cillum cillum anim est esse commodo amet sunt eiusmod. Irure reprehenderit exercitation ipsum non sit ut tempor aliqua excepteur. Mollit eu quis sint excepteur irure ullamco incididunt deserunt. Anim consequat ea laborum consectetur reprehenderit minim labore ullamco consectetur velit pariatur eu aliqua.Irure incididunt cupidatat consectetur proident pariatur. Ea do deserunt duis irure aliquip fugiat est. Aute cupidatat quis aliqua cillum cillum anim est esse commodo amet sunt eiusmod. Irure reprehenderit exercitation ipsum non sit ut tempor aliqua excepteur. Mollit eu quis sint excepteur irure ullamco incididunt deserunt. Anim consequat ea laborum consectetur reprehenderit minim labore ullamco consectetur velit pariatur eu aliqua.
               </p>
               </div>
             
            
           <div className='share  w-50 my-5 '>
            <Row>
                   <Col lg={3} sm={6}> <a className='text-white nav-link  text-center  p-2 rounded mb-2' style={{backgroundColor:'#4267B2'}} href='#'>  
                      <FontAwesomeIcon className='me-2' icon={faFacebookF}/>
                    Facebook</a>
                    </Col>

                   <Col lg={3} sm={6}> <a className='text-white nav-link  text-center  rounded p-2 mb-2' style={{backgroundColor:'#25D366'}} href='#'>
                      <FontAwesomeIcon className='me-2' icon={faWhatsapp}/>
                      Whatsapp</a>
                      </Col>

                      <Col lg={3} sm={6}>
                    <a className='text-white nav-link  text-center  p-2 rounded mb-2' href='#' style={{backgroundColor:'#1DA1F2'}} >  
                      <FontAwesomeIcon className='me-2' icon={faTwitter}/>
                      Twitter</a>
                      </Col>
                      
                      <Col lg={3} sm={6}>
                    <a className='text-white nav-link  text-center rounded p-2 mb-2' href='#' style={{backgroundColor:'#C13584'}}>
                      <FontAwesomeIcon className='me-2' icon={faInstagram}/>
                      Instagram</a>
                      </Col>
                      </Row>
               </div>
               <Comments/>
               <Lastestpost/>
      </Container>
    </div>
  )
}
export default PostPage;
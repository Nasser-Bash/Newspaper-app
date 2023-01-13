import React , {useState,useEffect} from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import Newscard from "./newscard";
import Fade from 'react-reveal/Zoom';
import axios from "axios";
import { Link } from 'react-router-dom';
const Featured = () => {
  const [Featurednews, setFeaturednews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getnews = async ()=>{
    const repos = await axios.get('https://inshorts.deta.dev/news?category=all');
    setFeaturednews(repos.data.data);
    setLoading(false)
  }
  useEffect(() => {
    getnews();
  }, []);
  const randomnews = Featurednews.sort(() => .5 - Math.random()).slice(0,6);
  if (isLoading) {
    return(
      <div className='featured-posts'>
          
      </div>
    )
  }
  return (
    <Fade>
    <div className='featured-posts mb-5'>
      <h6 className='section-title'>Featured posts:</h6>
      <Container>
        <Row>
        {
          randomnews.map((post)=>{
            return(
<Col md={6} className='banner-col mb-3 '>
            <Fade>
            <div className='d-md-flex d-block banner-card-2  p-2' >
              <div className='card-body p-2 mt-auto'>
               <Link to="/postpage"><h5>{post.title}</h5></Link>
                <span className='d-flex justify-content-between'>
                <p className='post-date mt-1'>{post.date}</p>
                <p className='post-category p-1'>{post.time}</p>
                </span>
              </div>
              <span className='card-img  '>
                <img variant="top" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src={post.imageUrl} />
              </span>
            </div>
            </Fade>

          
          </Col>
          )
          })
        }
          
    
        </Row>
      </Container>
    </div>
     </Fade>
  )
}
export default Featured;

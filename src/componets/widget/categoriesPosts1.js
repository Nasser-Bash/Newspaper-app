import React , {useState,useEffect} from 'react'
import { Card, Container ,Row ,Col} from 'react-bootstrap';
import Newscard from "./newscard";
import Fade from 'react-reveal/Zoom';
import axios from "axios";
import { Link } from "react-router-dom";
 const CategoriesPosts1 = ({category}) => {
  const [news, setnews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getnews = async ()=>{
    const repos = await axios.get('https://inshorts.deta.dev/news?category='+category);
    setnews(repos.data.data);
    setLoading(false);
  }
  const randomnews = news.sort(() => .1 - Math.random()).slice(0,5);
  useEffect(() => {
    getnews();
  }, []);
  if (isLoading) {
    return <div className="Categories-Posts my-4"></div>;
  }
  return (
   <Fade>
    <div className='Categories-Posts mb-5'>
            <h5 className='category-section p-2 ' style={ category ==='sports' ? { color:'#16a085', borderLeft: '8px solid #16a085'} : {color:'#ff4757', borderLeft: '8px solid #ff4757'}}>{category} :</h5>
            <Row>
              {
                randomnews.map((post,index)=>{
                  return(
                  <Col  className='banner-col mb-3 ' md={index===0 || index===1 ? 6 : 4}>
                  <Fade>
                    <div className=' banner-card-2  p-2' >
                    <span className='card-img  '>
                        <img className='bg-dark' variant="top" style={{ width: '100%', height: '250px', objectFit: 'cover' }} src={post.imageUrl} />
                      </span>
                      <div className='card-body p-2'>
                      <p className='post-date'>{post.date}</p>
                      <Link to='/postpage'> <h5 className="post-title">{post.title}</h5></Link>
                        
                      </div>
                      
                    </div>
                    </Fade>
                  </Col>
                  )
                })
              }
              
          </Row>
          
    </div>
    </Fade>
  )
}
export default CategoriesPosts1 ; 
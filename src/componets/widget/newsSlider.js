import React,{useState,useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Newscard from "./newscard";
import axios from "axios";
import { Link } from "react-router-dom";

 const NewsSlider = () => {
  const [technologynews, setnews] = useState([]);
  const [worldnews, setworldnews] = useState([]);
  const [businessnews, setbusinessnews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getnews = async ()=>{
    const repos = await axios.get('https://inshorts.deta.dev/news?category=technology');
    setnews(repos.data.data);
    setLoading(false);
  }
  const getworldnews = async ()=>{
    const repos = await axios.get('https://inshorts.deta.dev/news?category=world');
    setworldnews(repos.data.data);
    setLoading(false);
  }
  const getbusinessnews = async ()=>{
    const repos = await axios.get('https://inshorts.deta.dev/news?category=business');
    setbusinessnews(repos.data.data);
    setLoading(false);
  }
  useEffect(() => {
    getnews();
    getworldnews();
    getbusinessnews();
  }, []);
  if (isLoading) {
    return (
    <div className=' slider'>
        <div className="loader my-4"></div>;
    </div>)
  }
  return (
    <div className="slider d-lg-flex d-block">
      <div className="banner-1  w-lg-75 w-100" >
      <Carousel fade className="">
      {
        technologynews.map((post)=>{
          return(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={post.imageUrl}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="post-category">technology</h3>
             <Link to='/postpage'> <p className="post-title text-white">{post.title}</p></Link>
            </Carousel.Caption>
          </Carousel.Item>
          )
        })
      }
    </Carousel>
      </div>
    


    <div className="banner-2  w-lg-50 w-100" >
    <Carousel fade className="">
      {
        worldnews.map((post)=>{
          return(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={post.imageUrl}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="post-category">world</h3>
              <Link to='/postpage'> <p className="post-title text-white">{post.title}</p></Link>
            </Carousel.Caption>
          </Carousel.Item>
          )
        })
      }
    </Carousel>

    <Carousel fade className="">
      {
        businessnews.map((post)=>{
          return(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={post.imageUrl}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="post-category">business</h3>
              <Link to='/postpage'> <p className="post-title text-white">{post.title}</p></Link>
            </Carousel.Caption>
          </Carousel.Item>
          )
        })
      }
    </Carousel>

   
    </div>
    </div>

  )
}
export default  NewsSlider;
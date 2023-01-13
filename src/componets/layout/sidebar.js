import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Form,Button} from 'react-bootstrap';
 const Sidebar = () => {
  const [news, setnews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getnews = async ()=>{
    const repos = await axios.get('https://inshorts.deta.dev/news?category=all');
    setnews(repos.data.data);
    setLoading(false);
  }
  const randomnews = news.sort(() => .1 - Math.random()).slice(0,6);
  useEffect(() => {
    getnews();
  }, []);
  if (isLoading) {
    return (
    <div className=' sidebar w-100  px-2'>
        <div className="loader my-4"></div>
    </div>)
  }
  return (
    <div className=' sidebar w-100  px-2'>
      <div className='most-popular'>
       <h6 className='widget-title p-2'>Most Popular</h6>
              {
                randomnews.map((post)=>{
                  return(
                      <span className=''>
                    <img className='' src={post.imageUrl}/>
                    <p className='post-title'>{post.title}</p>
                    </span>
                  )
                })
              }

               </div>
               
    </div>
  )
}
export default Sidebar;
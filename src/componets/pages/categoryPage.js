import React , {useState,useEffect} from 'react'
import { Container,Row ,Col } from 'react-bootstrap';
import PostCategory from "../widget/posts";
import Lastestpost from "../widget/lastestpost";
import axios from "axios";
import { useParams } from "react-router-dom";
import Paginationcomponet from "../widget/paginationcomponet";
const CategoryPage = () => {
  const postcategory=useParams();
  const [Category, setCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getcategories = async ()=>{
    const repos = await axios.get('https://inshorts.deta.dev/news?category='+postcategory.categorypage);
    setCategory(repos.data.data);
    setLoading(false);
  }
  const [perpage] = useState(5);
  const [currentpage, setcurrentpage] = useState(1);
  const currentposts =  Category.slice(perpage * (currentpage - 1), perpage * currentpage);
  const paginate = (pageNumber) =>setcurrentpage(pageNumber)
  useEffect(() => {
    getcategories();
    
  }, [postcategory]); 

  if (isLoading) {
    return(
      <div className='section-posts'>
          <div className="loader my-4"></div>
      </div>
    )
  }
  return (
   
    <div className='section-posts'>
      <h6 className='page-title text-muted text-center p-2'>{postcategory.categorypage}</h6>
       <Container className='p-3'>
        <div className='top-posts'>
            <h4 className='section-title'>Top posts:</h4>
            <div className='posts'>
            {
              currentposts.map((post)=>{
                return(
                  <PostCategory key={post.id} post={post} postcategory={postcategory}/> 
                )
              })
             }
              
            </div>
        </div>
        <Paginationcomponet perpage={perpage} totalposts={Category.length} paginate={paginate} currentpage={currentpage}/>
        <div className='last-posts my-5'>
            
            <div >
            <Lastestpost/>
              </div>
        </div>
            
            
        </Container>
      </div>
     
  )
}
export  default CategoryPage;
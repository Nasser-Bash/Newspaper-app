import React , {useState,useEffect, createContext} from 'react'
import { Container } from 'react-bootstrap';
import Sidebar from "../layout/sidebar";
import Lastestpost from "../widget/lastestpost";
import Featured from "../widget/featuredPosts";
import CategoriesPosts1 from "../widget/categoriesPosts1";
import NewsSlider from "../widget/newsSlider";
    
 const Home = () => {
  return (
    <div>
      <Container  className='py-3 '>
        <NewsSlider/>
        <div className='d-md-flex d-block py-3 '>
        <div className='' >
        <CategoriesPosts1 category={'sports'}/>
          <Featured/>
          <CategoriesPosts1 category={'science'}/> 
        </div>
        <Sidebar/>
        </div>
        <Lastestpost/>
      </Container>
    </div>
  )
}
export default Home;
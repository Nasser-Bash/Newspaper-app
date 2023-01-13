import Header from "./componets/layout/Header";
import Mobileheader from "./componets/layout/mobile-header";
import NewsSlider from "./componets/widget/newsSlider";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./componets/pages/Home";
import CategoryPage from "./componets/pages/categoryPage";
import PostPage from "./componets/pages/postPage";
import Footer from "./componets/layout/footer";
import Sidebar from "./componets/layout/sidebar";
import React,{useState,useEffect,createContext} from 'react'
import axios from "axios";

export const Newscontext = createContext();
function App() {
  const [allnews, setallnews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getnews = async ()=>{
    const repos = await axios.get('https://inshorts.deta.dev/news?category=all');
    setallnews(repos.data.data);
    setLoading(false)
  }
  useEffect(() => {
    getnews();
  }, []);
  if (isLoading) {
    return (<div className="App-loader">
            <div className="loading"></div>
    </div>)
  }
  return (
    <div className="App">
       <Newscontext.Provider value={allnews}>
          <BrowserRouter >
          <Header />
        <Mobileheader/>
          <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route exact path="/category/:categorypage"  element={<CategoryPage/>} ></Route>
                  <Route path="/postpage" element={<PostPage/>}></Route>
          </Routes>
          <Footer/>
          </BrowserRouter>
        </Newscontext.Provider>
    </div>
  );
}

export default App;

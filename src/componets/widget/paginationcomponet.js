import React,{useState} from 'react'
import Pagination from 'react-bootstrap/Pagination';
 const Paginationcomponet = ({perpage,totalposts,paginate,currentpage}) => {
   const pagenumber = [];
   for (let index = 1; index <= totalposts/perpage; index++){
    pagenumber.push(index);
   }
   const [isActive, setActive] = useState(null);
   
    const activebutton = (active)=>{
            setActive(active)
        }
       
        const handleclick = (number,active)=>{
         
            paginate(number)
            activebutton(active)
        }
  return (
    <Pagination className='my-4 justify-content-center'>
    {
        pagenumber.map((number)=>{
                return(
                    <Pagination.Item  key={number} className={`none ${currentpage == number?"activepage":""}`} onClick={()=>handleclick(number,number) } >{number}</Pagination.Item>
                )
        })
    }
  </Pagination>
  )
}
export default Paginationcomponet;
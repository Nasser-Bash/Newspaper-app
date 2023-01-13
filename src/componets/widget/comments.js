import React ,{useState,useEffect} from 'react'
import { Form,FloatingLabel,Button } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Zoom';

 const Comments = () => {
    const [comments, setcomments] = useState({
        username:"",
        email:"",
        comment:"",
      });
     
    const [allcomments, setallcomments] = useState([]);
  
 
      const addComment = (e) =>{
        setcomments({ ...comments, [e.target.name]: e.target.value });
      }
      const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
    
        setallcomments([...allcomments,comments]);
        console.log(allcomments);
        event.preventDefault();
        event.value = " ";
       
      };
  return (
    <Fade>
    <div className='comments '>
 
            <h3 className='section-title'>Leave Your Comments</h3>
          
            <div className='comments-body my-4'>
           
                <div className='d-flex'>
                    <img className='user-img' src='images/user.png' alt=''/>
                    <span className='m-3'>
                        <h4 className='username '>UserName</h4>
                        <p className='comment-date text-muted'>2 Days ago </p>
                    </span>
                </div>
                    <p className='comment p-3'>Voluptate cillum ut aliquip sunt. Aliqua ad irure officia magna laboris exercitation dolore excepteur eu eiusmod excepteur deserunt esse. Pariatur quis nulla ullamco voluptate excepteur commodo dolor laboris ut non dolore mollit Lorem. Incididunt aute sit labore minim non veniam. Reprehenderit aute eiusmod veniam aliquip enim amet magna cillum velit. Laborum consequat consectetur elit et exercitation occaecat.</p>
            </div>
            
        {
            allcomments.map((comment)=>{
                return(
                    <Zoom>
                    <div className='comments-body my-4'>
                    <div className='d-flex'>
                        <img className='user-img' src='images/user.png' alt=''/>
                        <span className='m-3'>
                            <h4 className='username '>{comment.username}</h4>
                            <p className='username-email text-muted'>{comment.email}</p>
                        </span>
                    </div>
                        <p className='comment p-3'>{comment.comment}</p>
                </div>
                </Zoom>
                )
            })
        }
         

            <div className='comments-form'>
            <Form onSubmit={handleSubmit}>
                <span className='d-flex'>
            <FloatingLabel
                
                label="Email address"
                className="mb-3 w-50 me-2 "
            
            >
        <Form.Control type="email" placeholder="name@example.com"  onChange={addComment}    name="email"   />
      </FloatingLabel>

      <FloatingLabel  label="Name" className="mb-3 w-50">
        <Form.Control type="text" placeholder="Name" name="username"  onChange={addComment}  />
      </FloatingLabel>
      </span>
      <FloatingLabel  label="Comments">
        <Form.Control
            className='mb-3'
          as="textarea"
          placeholder="Leave a comment here"
          name="comment" 
          style={{ height: '100px' }}
          onChange={addComment}
        />
      </FloatingLabel>
      <Button  type="submit"  className='w-100 p-3' value="Submit">
        Leave Comment
      </Button>
      </Form>
            </div>
    </div>
    </Fade>
  )
}
export default Comments ; 
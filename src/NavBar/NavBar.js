import './NavBar.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();
    const [checkSubmit, setCheckSubmit] = useState(false);


    const getUsername = localStorage.getItem("username");

    // This is used to fetch whether the user has submitted a profile or not
    useEffect(() => {
        fetch('http://34.172.189.28:3389/has_submitted/' + getUsername)
          .then((res) => res.json())
          .then((res) => {
            if(res.submitted === true){
                setCheckSubmit(true);
            }
            else{
                setCheckSubmit(false);
            }
          })
      })

    //this is used to get the url for the resubmit page

    const resubmitPage = () => {        
        navigate("/form-edited");
    }


    const loggedout = e =>{
        localStorage.clear();
        navigate('/');
    }
    
    return(
        <section className='navbar_whole'>
            <section className='upper'>
                <span onClick={()=> navigate('/')}><img src={require('./logo.png')} alt=""/></span>
            </section>
            <section className='bottom'>
                <span onClick={()=> navigate('/')}>Search Profile</span>
                
                {
                    getUsername && !checkSubmit && <span onClick={()=> navigate('/form')}>Submit Profile</span>
                    
                }
                {
                    getUsername && checkSubmit && <span onClick={resubmitPage}>Submit Profile</span>
                    
                }
                {
                    !getUsername && <span onClick={()=> navigate('/nologin')}>Submit Profile</span>
                }
                {
                    getUsername? <span className='loggedin'><span onClick={loggedout}>Log Out</span><span className='username_actual'>[{getUsername}]</span></span>:
                    <span onClick={()=> navigate('/login')}>Log in / Sign Up</span>
                }
            </section>
        </section>
    ); 

}
    
export default Create;

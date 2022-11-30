import './NavBar.css'
import { Route, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();

    const getUsername = localStorage.getItem("username");

    const loggedout = e =>{
        localStorage.clear();
    }
    
    return(
        <section className='navbar_whole'>
            <section className='upper'>
                <span onClick={()=> navigate('/')}><img src={require('./logo.png')} alt=""/></span>
            </section>
            <section className='bottom'>
                <span onClick={()=> navigate('/')}>Search Profile</span>
                {
                    getUsername? <span onClick={()=> navigate('/form')}>Submit Profile</span>:
                    <span onClick={()=> navigate('/nologin')}>Submit Profile</span>
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
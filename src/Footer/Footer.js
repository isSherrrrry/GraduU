import './Footer.css'
import { Route, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Create = () => {

    const navigate = useNavigate();

    const getUsername = localStorage.getItem("username");

    const loggedout = e =>{
        localStorage.clear();
    }
    
    return(
        <section className='footer_whole'>
            <span>Team GradU Present ~ </span>
            <span>Open Source Project ~ </span>
            <span><a href="https://github.com/isSherrrrry/GraduU" target="_blank">Join Our GitHub</a></span>
        </section>
    ); 

}
    
export default Create;
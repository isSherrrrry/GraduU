import { Route, useNavigate } from 'react-router-dom';
import './simple.css'

const Create = () => {

    const getUserName = localStorage.getItem("username");

    const navigate = useNavigate();
    
    return(
        <section className='simple simple2'>
            <p>Please Log-in to fill out your application results</p>
            <button onClick={() => navigate('/Login')}>Log-In/Sign-Up</button>
        </section>
    ); 

}

export default Create;
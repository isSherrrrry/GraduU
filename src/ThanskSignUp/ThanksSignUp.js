import { useNavigate } from 'react-router-dom';
import './simple.css'

const Create = () => {

    const getUserName = localStorage.getItem("username");

    const navigate = useNavigate();
    
    return(
        <section className='simple simple2'>
            <p className='largeSimple'>Thank you for signing up!</p>
            <p>Want to submit a profile?</p>
            <button onClick={() => navigate('/form')}>Submit Profile</button>
        </section>
    ); 

}

export default Create;
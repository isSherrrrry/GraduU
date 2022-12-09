import { useNavigate } from 'react-router-dom';
import './simple.css'

const Create = () => {


    const navigate = useNavigate();
    
    return(
        <section className='simple simple2'>
            <p className='largeSimple'>Thank you for signing up!</p>
            <p>Log In to submit a profile.</p>
            <button onClick={() => navigate('/login')}>Log In</button>
        </section>
    ); 

}

export default Create;
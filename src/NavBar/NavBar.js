import './NavBar.css'
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();
    
    return(
        <section className='navbar_whole'>
            <section className='upper'>
                <span onClick={()=> navigate('/')}><img src={require('./logo.png')} alt=""/></span>
            </section>
            <section className='bottom'>
                <span onClick={()=> navigate('/')}>Search Profile</span>
                <span onClick={()=> navigate('/form')}>Submit Profile</span>
                <span onClick={()=> navigate('/login')}>Log in / Sign Up</span>
            </section>
        </section>
    ); 

}
    
export default Create;
import './NavBar.css'
import { Route, useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();
    
    return(
        <section className='navbar_whole'>
            <section className='upper'>
                <img src={require('./logo.png')}/>
                <p>Log in / Sign Up</p>
            </section>
            <section className='bottom'>
                <span onClick={()=> navigate('/')}>Search Profile</span>
                <span onClick={()=> navigate('/form')}>Submit Profile</span>
            </section>
        </section>
    ); 

}
    
export default Create;
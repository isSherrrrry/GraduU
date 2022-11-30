import { useNavigate } from 'react-router-dom';

const Create = () => {

    const getUserName = localStorage.getItem("username");

    const navigate = useNavigate();
    const resultClick = (key) => {
        navigate('/resultPage', { state: { 'username': getUserName } });
    }
    
    return(
        <section className='simple'>
            <p><b>Thank you for submitting your profile!</b></p>
            <p>We appreciate your contribution to our community.</p>
            <button onClick={resultClick}>View Your Profile Here</button>
        </section>
    ); 

}

export default Create;
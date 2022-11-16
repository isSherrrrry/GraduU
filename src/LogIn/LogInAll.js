import LogIn from './LogIn'
import SignUp from './SignUp'
import { useState } from 'react';

const Create = () => {

    const [option, setOption] = useState(0);

    const chooseLog = e =>{
        setOption(0);
    }
    const chooseSign = e =>{
        setOption(1);
    }

    return(
        <section className='longinall'>
            <section className='logsign_choice'>
                <li onClick={chooseLog}>Log In</li>
                <li>/</li>
                <li onClick={chooseSign}>Sign Up</li>
            </section>
            <section className='logsign_option'>
                {option === 0 && <LogIn />}
                {option && <SignUp />}
            </section>
        </section>
    ); 

}
    
export default Create;
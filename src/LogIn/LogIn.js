import './LogInAll.css'
import { Route, useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate();
    
    return(
        <section>
            <form>
                <label>
                    <span>Username</span>
                    <input type="text" name="username" required/>
                </label>

                <label>
                    <span>Password</span>
                    <input type="text" name="password" required/>
                </label>

                <button type='submit' onClick={()=> navigate('/')}>Log in</button>
            </form>
        </section>
    ); 

}
    
export default Create;
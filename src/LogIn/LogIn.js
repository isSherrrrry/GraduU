import 'semantic-ui-css/semantic.min.css'
import './LogInAll.css'


import { Route, useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    return(
        <section className='logsign'>
            <form id="login">
                <label>
                    <span>Username</span>
                    <div className="ui input"><input type="text" name="username" required/></div>
                </label>

                <label>
                    <span>Password</span>
                    <div className="ui input"><input type="text" name="password" required/></div>
                </label>

                <button type='submit' onClick={()=> navigate('/')} className="logsign_submit">Log in</button>
            </form>
        </section>
    ); 

}
    
export default Create;
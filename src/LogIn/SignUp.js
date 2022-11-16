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
                    <input type="text" name="password"/>
                </label>

                <label>
                    <span>Re-type Password</span>
                    <input type="text" name="re_password"/>
                </label>

                <label>
                    <span>First Name</span>
                    <input type="text" name="first_name" required/>
                </label>

                <label>
                    <span>Preferred Name</span>
                    <input type="text" name="preferred_name"/>
                </label>

                <label>
                    <span>Last Name</span>
                    <input type="text" name="last_name"/>
                </label>

                <label>
                    <span>Pronouns</span>
                    <input type="text" name="pronoun"/>
                </label>

                <label>
                    <span>Email</span>
                    <input type="email" name="email_"/>
                </label>

                <label>
                    <span>LinkedIn Profile</span>
                    <input type="url" name="first_name"/>
                </label>

                <label>
                    <span>Headline</span>
                    <input type="text" name="first_name"/>
                </label>

                <label>
                    <span>About</span>
                    <textarea type="text" name="first_name"/>
                </label>



                <button type='submit' onClick={()=> navigate('/')}>Log in</button>
            </form>
        </section>
    ); 

}
    
export default Create;
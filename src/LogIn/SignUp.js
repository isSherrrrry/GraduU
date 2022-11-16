import { Route, useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './LogInAll.css'



const Create = () => {

    const navigate = useNavigate();
    
    return(
        <section className='logsign'>
            <form id='signup' className='ui form'>
                <label>
                    <span>Username*</span>
                    <div className="ui input"><input type="text" name="username" required/></div>
                </label>

                <label>
                    <span>Password*</span>
                    <div className="ui input"><input type="text" name="password" required/></div>
                </label>

                <label>
                    <span>Re-type Password*</span>
                    <div className="ui input"><input type="text" name="re_password" required/></div>
                </label>

                <label>
                    <span>First Name*</span>
                    <div className="ui input"><input type="text" name="first_name" required/></div>
                </label>

                <label>
                    <span>Preferred Name</span>
                    <div className="ui input"><input type="text" name="preferred_name"/></div>
                </label>

                <label>
                    <span>Last Name</span>
                    <div className="ui input"><input type="text" name="last_name"/></div>
                </label>

                <label>
                    <span>Pronouns</span>
                    <div className="ui input"><input type="text" name="pronoun"/></div>
                </label>

                <label>
                    <span>Email</span>
                    <div className="ui input"><input type="email" name="email_add"/></div>
                </label>

                <label>
                    <span>LinkedIn Profile</span>
                    <div className="ui input"><input type="url" name="linkedin_link"/></div>
                </label>

                <label>
                    <span>Headline</span>
                    <div className="ui input"><input type="text" name="headline" placeholder='e.g. First-year Ph.D. Student in HCI'/></div>
                </label>

                <label className="textarea">
                    <span>About</span>
                    <textarea type="text" name="about" placeholder='Introduce yourself here!'/>
                </label>



                <button type='submit' onClick={()=> navigate('/')} className="logsign_submit">Sign Up</button>
            </form>
        </section>
    ); 

}
    
export default Create;
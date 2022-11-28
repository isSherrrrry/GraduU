import 'semantic-ui-css/semantic.min.css'
import './LogInAll.css'


import { Route, useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        var data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries());
        fetch("http://127.0.0.1:5000/login",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formObject)
        })
        .then((res) => res.json())
        .then((res) => {
            const validUser = res.user_exists;
            const pwMatch = res.valid_password;
            if (validUser === false || pwMatch === false) {
                alert('Invalid username/password combination.');
            }
            else {
                navigate('/submit');
            }
        });
    }
    return(
        <section className='logsign'>
            <form id="login" onSubmit={handleSubmit}>
                <label>
                    <span>Username</span>
                    <div className="ui input"><input type="text" name="username" required/></div>
                </label>

                <label>
                    <span>Password</span>
                    <div className="ui input"><input type="text" name="password" required/></div>
                </label>

                <button type='submit' className="logsign_submit">Log in</button>
            </form>
        </section>
    ); 

}
    
export default Create;
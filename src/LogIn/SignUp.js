import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './LogInAll.css'


const Create = () => {
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        var data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries());
        fetch("http://34.172.189.28:3389/signup",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formObject)
        })
        .then((res) => res.json())
        .then((res) => {
            const validPW = res.validPW;
            const validUser = res.validUser;
            if (validPW === false) {
                alert('The password and re-entered password fields must match');
            }
            else if(validUser === false) {
                alert('This username has already been taken. Please select another.');
            }
            else {
                navigate('/thankssignup');
            }
        });
    }

    return(
        <section className='logsign'>
            <form id='signup' onSubmit={handleSubmit} className='ui form'>
                <label>
                    <span>Username*</span>
                    <div className="ui input"><input type="text" name="username" required/></div>
                </label>

                <label>
                    <span>Password*</span>
                    <div className="ui input"><input type="password" name="password" required/></div>
                </label>

                <label>
                    <span>Re-type Password*</span>
                    <div className="ui input"><input type="password" name="re_password" required/></div>
                </label>

                <label>
                    <span>First Name*</span>
                    <div className="ui input"><input type="text" name="first_name" required/></div>
                </label>

                <label>
                    <span>Preferred Name</span>
                    <div className="ui input"><input type="text" name="pref_name"/></div>
                </label>

                <label>
                    <span>Last Name</span>
                    <div className="ui input"><input type="text" name="last_name"/></div>
                </label>

                <label>
                    <span>Pronouns</span>
                    <div className="ui input"><input type="text" name="pronouns"/></div>
                </label>

                <label>
                    <span>Email</span>
                    <div className="ui input"><input type="email" name="email"/></div>
                </label>

                <label>
                    <span>LinkedIn Profile</span>
                    <div className="ui input"><input type="url" name="linkedin"/></div>
                </label>

                <label>
                    <span>Headline</span>
                    <div className="ui input"><input type="text" name="headline" placeholder='e.g. First-year Ph.D. Student in HCI'/></div>
                </label>

                <label className="textarea">
                    <span>About</span>
                    <textarea type="text" name="about" placeholder='Introduce yourself here!'/>
                </label>



                <button type='submit' className="logsign_submit">Sign Up</button>
            </form>
        </section>
    ); 

}
    
export default Create;

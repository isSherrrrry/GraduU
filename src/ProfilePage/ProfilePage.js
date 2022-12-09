import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';



import '../ResultPage/ResultSection.css'

const Create = () => {

  const getUserName = localStorage.getItem("username");
  const { state } = useLocation();
  const user = state.currUser;
  const isSame = getUserName === user ? true : false;
  const navigate = useNavigate();

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('http://34.172.189.28:3389/user_profile/' + user)
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      })
  }, [state.currUser])

  const downloadCV = () => {
    fetch("http://34.172.189.28:3389/download/" + user + "_cv.pdf")
    .then(window.open('http://34.172.189.28:3389/download/' + user + "_cv.pdf", "_blank"));
  }

  const downloadSOP = () => {
    const usr = data.username;
    fetch("http://34.172.189.28:3389/download/" + user + "_sop.pdf")
    .then(window.open('http://34.172.189.28:3389/download/' + user + "_sop.pdf", "_blank"));
  }

  const goToResult = () => {
    navigate('/resultPage', {state: {'username': user}});
  }

  const edit = () => {
    navigate('/form-edited');
  }


    return(
      <section className="result_whole">
        <section className="left">
          <section className='geninfo'>
            <h4 id="info_id">{user}</h4>
            <p>{data.university}</p>
            <p>{data.headline}</p>
            <p>{data.pronouns}</p>

            <section className='downloads'>
            <h4>Download Documents</h4>
            {data.cv !== '' ? (<p onClick={downloadCV}>CV</p>) : (<p>CV not Available</p>)}
            {data.sop !== '' ? (<p onClick={downloadSOP}>Statement of Purpose</p>) : (<p>Statement of Purpose not Available</p>)}
            </section>
          </section>
          

          <section className="submitted">
            <h4>Submitted Profile</h4>
            <span onClick={goToResult}>View Profile</span>
            {isSame && <span onClick={edit}>Edit Profile</span>}
          </section>
        </section>

        <section className='right'>
          <section className='About result_section'>
            <h3>About me</h3>
            <p className="desc">{data.about}</p>
          </section>

          <section className='personal_info result_section'>
            <h3>Personal Information</h3>
            <section className="personal_items result_text">
              {data.email && <section>
                Contact Email: {data.email}
              </section>}
              {data.pronouns && <section>
                Pronoun: {data.pronouns}
              </section>}
              {data.gender && <section>
                Gender: {data.gender}
              </section>}
              {data.race && <section>
                Race/Ethnicity: {data.race}
              </section>}
              {data.linkedin && <section>
                LinkedIn: <a href={data.linkedin} target='_blank' rel="noreferrer">Click Here</a>
              </section>}
             
            </section>
          </section>

          <section className='footer'>
            <p>Note: Your personal profile will be shared with your submitted application.</p>
            <p id='underline'>All fields are optional</p>
          </section>

        </section>
      </section>
    );

}

export default Create;

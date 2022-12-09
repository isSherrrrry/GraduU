import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import classNames from 'classnames';

import './ResultSection.css'


function accept(input){
  if (input === "Accepted"){
    return true;
  }else{
    return false;
  }
}
function reject(input){
  if (input === "Rejected"){
    return true;
  }else{
    return false;
  }
}
function waitlist(input){
  if (input === "Waitlisted"){
    return true;
  }else{
    return false;
  }
}


export function ResultPage() {
  const { state } = useLocation();
  const user = state.username;
  const [data, setdata] = useState([]);

  const navigate = useNavigate();

  const profileClick = () =>{
    navigate('/profile', { state: { 'currUser': user } })
  }

  const downloadCV = () => {
    const usr = data.username;
    fetch("http://34.172.189.28:3389/download/" + usr + "_cv.pdf")
    .then(window.open('http://34.172.189.28:3389/download/' + usr + "_cv.pdf", "_blank"));
  }

  const downloadSOP = () => {
    const usr = data.username;
    fetch("http://34.172.189.28:3389/download/" + usr + "_sop.pdf")
    .then(window.open('http://34.172.189.28:3389/download/' + usr + "_sop.pdf", "_blank"));
  }

  useEffect(() => {
    fetch('http://34.172.189.28:3389/profile/' + user)
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      })
  }, [user])

  var btnGroupClasses1 = classNames(
    {
      "uni status_accepted": accept(data.application_result_1),
      "uni status_rejected": reject(data.application_result_1),
      "uni status_waitlisted": waitlist(data.application_result_1)
    }
  )
  var btnGroupClasses2 = classNames(
    {
      "uni status_accepted": accept(data.application_result_2),
      "uni status_rejected": reject(data.application_result_2),
      "uni status_waitlisted": waitlist(data.application_result_2)
    }
  )
  var btnGroupClasses3 = classNames(
    {
      "uni status_accepted": accept(data.application_result_3),
      "uni status_rejected": reject(data.application_result_3),
      "uni status_waitlisted": waitlist(data.application_result_3)
    }
  )
  var btnGroupClasses4 = classNames(
    {
      "uni status_accepted": accept(data.application_result_4),
      "uni status_rejected": reject(data.application_result_4),
      "uni status_waitlisted": waitlist(data.application_result_4)
    }
  )
  var btnGroupClasses5 = classNames(
    {
      "uni status_accepted": accept(data.application_result_5),
      "uni status_rejected": reject(data.application_result_5),
      "uni status_waitlisted": waitlist(data.application_result_5)
    }
  )
  var btnGroupClasses6 = classNames(
    {
      "uni status_accepted": accept(data.application_result_6),
      "uni status_rejected": reject(data.application_result_6),
      "uni status_waitlisted": waitlist(data.application_result_6)
    }
  )
  var btnGroupClasses7 = classNames(
    {
      "uni status_accepted": accept(data.application_result_7),
      "uni status_rejected": reject(data.application_result_7),
      "uni status_waitlisted": waitlist(data.application_result_7)
    }
  )
  var btnGroupClasses8 = classNames(
    {
      "uni status_accepted": accept(data.application_result_8),
      "uni status_rejected": reject(data.application_result_8),
      "uni status_waitlisted": waitlist(data.application_result_8)
    }
  )
  var btnGroupClasses9 = classNames(
    {
      "uni status_accepted": accept(data.application_result_9),
      "uni status_rejected": reject(data.application_result_9),
      "uni status_waitlisted": waitlist(data.application_result_9)
    }
  )
  var btnGroupClasses10 = classNames(
    {
      "uni status_accepted": accept(data.application_result_10),
      "uni status_rejected": reject(data.application_result_10),
      "uni status_waitlisted": waitlist(data.application_result_10)
    }
  )
  var btnGroupClasses11 = classNames(
    {
      "uni status_accepted": accept(data.application_result_11),
      "uni status_rejected": reject(data.application_result_11),
      "uni status_waitlisted": waitlist(data.application_result_11)
    }
  )
  var btnGroupClasses12 = classNames(
    {
      "uni status_accepted": accept(data.application_result_12),
      "uni status_rejected": reject(data.application_result_12),
      "uni status_waitlisted": waitlist(data.application_result_12)
    }
  )

  return (
    <>

    <section className="result_whole">
        <section className="left">
        <section className='geninfo'>
            <section className='text_info'>
                <p id='info_id' onClick={profileClick}>{data.first_name + " " + data.last_name}</p>
                <p id='info_pronoun'>{data.pronouns}</p>
                <p id='info_desc'>{data.about}</p>
            </section>
            <section className='contacts'>
                <h4>Contacts</h4>
                {data.email ? <p>Email: <a href = {"mailto:" + data.email}>{data.email}</a></p>:
                <p>Email: None</p>}
                {data.linkedin ? <p>LinkedIn: <span><a href= {data.linkedin} target='_blank' rel="noreferrer">Go to LinkedIn!</a></span></p>:
                <p>LinkedIn: None</p>}
            </section>
            <section className='downloads'>
                <h4>Documents</h4>
                {data.cv !== '' ? (<p onClick={downloadCV}>CV ↓</p>) : (<p>CV not Available</p>)}
                {data.sop !== '' ? (<p onClick={downloadSOP}>Statement of Purpose ↓</p>) : (<p>Statement of Purpose not Available</p>)}
            </section>
        </section>
        </section>
        <section className="right">
          <section className = "app_results result_section">
              <section className="app_results_header">
                  <h3>Application Results</h3>
                  <p>Final Choice: <b>{data.final_choice}</b></p>
              </section>
              <section className = "tags">
              { data.application_university_1 &&
                <span className= {btnGroupClasses1}>{data.application_university_1}
                <span className= "hover"><span className="hover_lab">{data.application_program_1}</span>
                <span className="hover_funding">{data.application_funding_1}</span></span></span>
              }
              { data.application_university_2 &&
                <span className= {btnGroupClasses2}>{data.application_university_2}
                <span className= "hover"><span className="hover_lab">{data.application_program_2}</span>
                <span className="hover_funding">{data.application_funding_2}</span></span></span>
              }
              { data.application_university_3 &&
                <span className= {btnGroupClasses3}>{data.application_university_3}
                <span className= "hover"><span className="hover_lab">{data.application_program_3}</span>
                <span className="hover_funding">{data.application_funding_3}</span></span></span>
              }
              { data.application_university_4 &&
                <span className= {btnGroupClasses4}>{data.application_university_4}
                <span className= "hover"><span className="hover_lab">{data.application_program_4}</span>
                <span className="hover_funding">{data.application_funding_4}</span></span></span>
              }
              { data.application_university_5 &&
                <span className= {btnGroupClasses5}>{data.application_university_5}
                <span className= "hover"><span className="hover_lab">{data.application_program_5}</span>
                <span className="hover_funding">{data.application_funding_5}</span></span></span>
              }{ data.application_university_6 &&
                <span className= {btnGroupClasses6}>{data.application_university_6}
                <span className= "hover"><span className="hover_lab">{data.application_program_6}</span>
                <span className="hover_funding">{data.application_funding_6}</span></span></span>
              }{ data.application_university_7 &&
                <span className= {btnGroupClasses7}>{data.application_university_7}
                <span className= "hover"><span className="hover_lab">{data.application_program_7}</span>
                <span className="hover_funding">{data.application_funding_7}</span></span></span>
              }{ data.application_university_8 &&
                <span className= {btnGroupClasses8}>{data.application_university_8}
                <span className= "hover"><span className="hover_lab">{data.application_program_8}</span>
                <span className="hover_funding">{data.application_funding_8}</span></span></span>
              }{ data.application_university_9 &&
                <span className= {btnGroupClasses9}>{data.application_university_9}
                <span className= "hover"><span className="hover_lab">{data.application_program_9}</span>
                <span className="hover_funding">{data.application_funding_9}</span></span></span>
              }{ data.application_university_10 &&
                <span className= {btnGroupClasses10}>{data.application_university_10}
                <span className= "hover"><span className="hover_lab">{data.application_program_10}</span>
                <span className="hover_funding">{data.application_funding_10}</span></span></span>
              }{ data.application_university_11 &&
                <span className= {btnGroupClasses11}>{data.application_university_11}
                <span className= "hover"><span className="hover_lab">{data.application_program_11}</span>
                <span className="hover_funding">{data.application_funding_11}</span></span></span>
              }{ data.application_university_12 &&
                <span className= {btnGroupClasses12}>{data.application_university_12}
                <span className= "hover"><span className="hover_lab">{data.application_program_12}</span>
                <span className="hover_funding">{data.application_funding_12}</span></span></span>
              }
              </section>
              <section id = "result_status_indi">
                  <section className = "accept status">
                      <span className="circle"></span>
                      <span>ACCEPT</span>
                  </section>
                  <section className = "waitlisted status">
                      <span className="circle"></span>
                      <span>WAITLISTED</span>
                  </section>
                  <section className = "rejected status">
                      <span className="circle"></span>
                      <span>REJECTED</span>
                  </section>

              </section>

          </section>

          <section className="result_section result_underg">
              <h3>Education</h3>
              <section className = "undergrad_Info result_text">
                  {data.uni_name_1 && <section>
                      Education: {data.uni_name_1}
                  </section>}

                  {data.uni_degree_1 && <section>
                      Degree: {data.uni_degree_1}
                  </section>}

                  {data.uni_gpa_1 && <section>
                      GPA: {data.uni_gpa_1}
                  </section>}

                  {data.uni_major_1 && <section>
                      Major/Focus: {data.uni_major_1}
                  </section>}

                  {data.uni_minor_1 && <section>
                      Minor(if applicable): {data.uni_minor_1}
                  </section>}
              </section>
              <section className = "undergrad_Info result_text">
                  {data.uni_name_2 && <section>
                      Education: {data.uni_name_2}
                  </section>}

                  {data.uni_degree_2 && <section>
                      Degree: {data.uni_degree_2}
                  </section>}

                  {data.uni_gpa_2 && <section>
                      GPA: {data.uni_gpa_2}
                  </section>}

                  {data.uni_major_2 && <section>
                      Major/Focus: {data.uni_major_2}
                  </section>}

                  {data.uni_minor_2 && <section>
                      Minor(if applicable): {data.uni_minor_2}
                  </section>}
              </section>
              <section className = "undergrad_Info result_text">
                  {data.uni_name_3 && <section>
                      Education: {data.uni_name_3}
                  </section>}

                  {data.uni_degree_3 && <section>
                      Degree: {data.uni_degree_3}
                  </section>}

                  {data.uni_gpa_3 && <section>
                      GPA: {data.uni_gpa_3}
                  </section>}

                  {data.uni_major_3 && <section>
                      Major/Focus: {data.uni_major_3}
                  </section>}

                  {data.uni_minor_3 && <section>
                      Minor(if applicable): {data.uni_minor_3}
                  </section>}
              </section>
              <section className = "undergrad_Info result_text">
                  {data.uni_name_4 && <section>
                      Education: {data.uni_name_4}
                  </section>}

                  {data.uni_degree_4 && <section>
                      Degree: {data.uni_degree_4}
                  </section>}

                  {data.uni_gpa_4 && <section>
                      GPA: {data.uni_gpa_4}
                  </section>}

                  {data.uni_major_4 && <section>
                      Major/Focus: {data.uni_major_4}
                  </section>}

                  {data.uni_minor_4 && <section>
                      Minor(if applicable): {data.uni_minor_4}
                  </section>}
              </section>
          </section>
          <section className = "demographic result_section">
              <h3>Demographic</h3>
              <section className='result_text'>
                  {data.ethnicity && <section>
                      Ethnicity: {data.ethnicity}
                  </section>}

                  {data.gender && <section>
                      Gender: {data.gender}
                  </section>}

                  {data.firstgen && <section>
                      First-gen: {data.firstgen}
                  </section>}

                  {data.citizenship && <section>
                      Citizenship: {data.citizenship}
                  </section>}
              </section>
          </section>
          <section className="result_section result_rec_whole">
              <h3>Recommenders</h3>
              {data.recommender && <section className='result_text result_rec'> {data.recommender}
              </section>}
          </section>
        </section>
    </section>

    </>
  )
}
export default ResultPage;

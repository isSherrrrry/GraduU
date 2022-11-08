import React, { Component, useState, useEffect } from "react";
import data from "../test"
import classNames from 'classnames';

import './ResultPage.css'
import NavBar from '../NavBar/NavBar'
import Demo from './Demographic/Demo'
import Graduate from './EducationSection/Graduate'
import Undergrad from './EducationSection/Undergrad'
import Recommend from './Recommend/Recommendation'
import Result from './ResultSections/ApplicationResults'
import GenInfo from './GenInfo/GenInfo'


function accept(input){
  if (input == 1){
    return true;
  }else{
    return false;
  }
}
function reject(input){
  if (input == 2){
    return true;
  }else{
    return false;
  }
}
function waitlist(input){
  if (input == 3){
    return true;
  }else{
    return false;
  }
}

export function ResultPage() {
  const [post, setpost] = useState([])

  useEffect(() => {
    fetch("E:\桌面\GraduU\GraduU\src\test")
      .then((res) => res.json())
      .then((res) => {
        setpost(res);
        console.log(post)
      })
  }, [])

  var btnGroupClasses1 = classNames(
    {
      "uni status_accepted": accept(data.res_app_1),
      "uni status_rejected": reject(data.res_app_1),
      "uni status_waitlisted": waitlist(data.res_app_1)
    }
  )
  var btnGroupClasses2 = classNames(
    {
      "uni status_accepted": accept(data.res_app_2),
      "uni status_rejected": reject(data.res_app_2),
      "uni status_waitlisted": waitlist(data.res_app_2)
    }
  )
  var btnGroupClasses3 = classNames(
    {
      "uni status_accepted": accept(data.res_app_3),
      "uni status_rejected": reject(data.res_app_3),
      "uni status_waitlisted": waitlist(data.res_app_3)
    }
  )
  var btnGroupClasses4 = classNames(
    {
      "uni status_accepted": accept(data.res_app_4),
      "uni status_rejected": reject(data.res_app_4),
      "uni status_waitlisted": waitlist(data.res_app_4)
    }
  )
  var btnGroupClasses5 = classNames(
    {
      "uni status_accepted": accept(data.res_app_5),
      "uni status_rejected": reject(data.res_app_5),
      "uni status_waitlisted": waitlist(data.res_app_5)
    }
  )
  var btnGroupClasses6 = classNames(
    {
      "uni status_accepted": accept(data.res_app_6),
      "uni status_rejected": reject(data.res_app_6),
      "uni status_waitlisted": waitlist(data.res_app_6)
    }
  )
  var btnGroupClasses7 = classNames(
    {
      "uni status_accepted": accept(data.res_app_7),
      "uni status_rejected": reject(data.res_app_7),
      "uni status_waitlisted": waitlist(data.res_app_7)
    }
  )
  var btnGroupClasses8 = classNames(
    {
      "uni status_accepted": accept(data.res_app_8),
      "uni status_rejected": reject(data.res_app_8),
      "uni status_waitlisted": waitlist(data.res_app_8)
    }
  )
  var btnGroupClasses9 = classNames(
    {
      "uni status_accepted": accept(data.res_app_9),
      "uni status_rejected": reject(data.res_app_9),
      "uni status_waitlisted": waitlist(data.res_app_9)
    }
  )
  var btnGroupClasses10 = classNames(
    {
      "uni status_accepted": accept(data.res_app_10),
      "uni status_rejected": reject(data.res_app_10),
      "uni status_waitlisted": waitlist(data.res_app_10)
    }
  )
  var btnGroupClasses11 = classNames(
    {
      "uni status_accepted": accept(data.res_app_11),
      "uni status_rejected": reject(data.res_app_11),
      "uni status_waitlisted": waitlist(data.res_app_11)
    }
  )
  var btnGroupClasses12 = classNames(
    {
      "uni status_accepted": accept(data.res_app_12),
      "uni status_rejected": reject(data.res_app_12),
      "uni status_waitlisted": waitlist(data.res_app_12)
    }
  )

  return (
    <>
    <NavBar/>

    <section className="result_whole">
        <section className="left">
        <section className='geninfo'>
            <section className='text_info'>
                <p id='info_id'>ericxue64</p>
                <p id='info_pronoun'>He/Him/His</p>
                <p id='info_desc'>Data manager at Queen Savvy Lab, Nell Hodgson Woodruff School of Nursing at Emory University</p>
            </section>
            <section className='contacts'>
                <h4>Contacts</h4>
                <p>Email: <a href = "mailto: eric.xue@emory.edu">eric.xue@emory.edu</a></p>
                <p>LinkedIn: <span><a href= "https://www.linkedin.com/in/yijunliu23/" target="_blank">Go to LinkedIn</a></span></p>
            </section>
            <section className='downloads'>
                <h4>Documents</h4>
                <p>CV ↓</p>
                <p>Statement of Purpose ↓</p>
            </section>
        </section>
        </section>
        <section className="right">
          <section className = "app_results result_section">
              <section className="app_results_header">
                  <h3>Application Results</h3>
                  <p>Final Choice: <b>Emory University</b></p>
              </section>
              <section className = "tags">
              { data.res_uni_1 &&
                <span className= {btnGroupClasses1}>{data.res_uni_1}
                <span className= "hover"><span className="hover_lab">{data.res_prog_1}</span>
                <span className="hover_funding">{data.res_funding_1}</span></span></span>
              }
              { data.res_uni_2 &&
                <span className= {btnGroupClasses2}>{data.res_uni_2}
                <span className= "hover"><span className="hover_lab">{data.res_prog_2}</span>
                <span className="hover_funding">{data.res_funding_2}</span></span></span>
              }
              { data.res_uni_3 &&
                <span className= {btnGroupClasses3}>{data.res_uni_3}
                <span className= "hover"><span className="hover_lab">{data.res_prog_3}</span>
                <span className="hover_funding">{data.res_funding_3}</span></span></span>
              }
              { data.res_uni_4 &&
                <span className= {btnGroupClasses4}>{data.res_uni_4}
                <span className= "hover"><span className="hover_lab">{data.res_prog_4}</span>
                <span className="hover_funding">{data.res_funding_4}</span></span></span>
              }
              { data.res_uni_5 &&
                <span className= {btnGroupClasses5}>{data.res_uni_5}
                <span className= "hover"><span className="hover_lab">{data.res_prog_5}</span>
                <span className="hover_funding">{data.res_funding_5}</span></span></span>
              }{ data.res_uni_6 &&
                <span className= {btnGroupClasses6}>{data.res_uni_6}
                <span className= "hover"><span className="hover_lab">{data.res_prog_6}</span>
                <span className="hover_funding">{data.res_funding_6}</span></span></span>
              }{ data.res_uni_7 &&
                <span className= {btnGroupClasses7}>{data.res_uni_7}
                <span className= "hover"><span className="hover_lab">{data.res_prog_7}</span>
                <span className="hover_funding">{data.res_funding_7}</span></span></span>
              }{ data.res_uni_8 &&
                <span className= {btnGroupClasses8}>{data.res_uni_8}
                <span className= "hover"><span className="hover_lab">{data.res_prog_8}</span>
                <span className="hover_funding">{data.res_funding_8}</span></span></span>
              }{ data.res_uni_9 &&
                <span className= {btnGroupClasses9}>{data.res_uni_9}
                <span className= "hover"><span className="hover_lab">{data.res_prog_9}</span>
                <span className="hover_funding">{data.res_funding_9}</span></span></span>
              }{ data.res_uni_10 &&
                <span className= {btnGroupClasses10}>{data.res_uni_10}
                <span className= "hover"><span className="hover_lab">{data.res_prog_10}</span>
                <span className="hover_funding">{data.res_funding_10}</span></span></span>
              }{ data.res_uni_11 &&
                <span className= {btnGroupClasses11}>{data.res_uni_11}
                <span className= "hover"><span className="hover_lab">{data.res_prog_11}</span>
                <span className="hover_funding">{data.res_funding_11}</span></span></span>
              }{ data.res_uni_12 &&
                <span className= {btnGroupClasses12}>{data.res_uni_12}
                <span className= "hover"><span className="hover_lab">{data.res_prog_12}</span>
                <span className="hover_funding">{data.res_funding_12}</span></span></span>
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
              <h3>Undergrad Education</h3>
              <section className = "undergrad_Info result_text">
                  {data.under_uni_name_1 && <section>
                      Undergrad: {data.under_uni_name_1}
                  </section>}

                  {data.under_gpa_1 && <section>
                      GPA: {data.under_gpa_1}
                  </section>}

                  {data.under_major1 && <section>
                      Major: {data.under_major_1}
                  </section>}

                  {data.under_minor_1 && <section>
                      Minor: {data.under_minor_1}
                  </section>}
              </section>
              <section className = "undergrad_Info result_text">
                  {data.under_uni_name_2 && <section>
                      Undergrad: {data.under_uni_name_2}
                  </section>}

                  {data.under_gpa_2 && <section>
                      GPA: {data.under_gpa_2}
                  </section>}

                  {data.under_major2 && <section>
                      Major: {data.under_major_2}
                  </section>}

                  {data.under_minor_2 && <section>
                      Minor: {data.under_minor_2}
                  </section>}
              </section>
              <section className = "undergrad_Info result_text">
                  {data.under_uni_name_3 && <section>
                      Undergrad: {data.under_uni_name_3}
                  </section>}

                  {data.under_gpa_3 && <section>
                      GPA: {data.under_gpa_3}
                  </section>}

                  {data.under_major3 && <section>
                      Major: {data.under_major_3}
                  </section>}

                  {data.under_minor_3 && <section>
                      Minor: {data.under_minor_3}
                  </section>}
              </section>
          </section>
          <section className="result_section result_grad">
              <h3>Graduate Education</h3>
              <section className = "Graduate_Info result_text">
                  {data.grad_uni_name_1 && <section>
                      Graduate: {data.grad_uni_name_1}
                  </section>}

                  {data.grad_prog_name_1 && <section>
                      Program: {data.grad_prog_name_1}
                  </section>}

                  {data.grad_gpa_1 && <section>
                      GPA: {data.grad_gpa_1}
                  </section>}

                  {data.grad_major_1 && <section>
                      Major: {data.grad_major_1}
                  </section>}

                  {data.grad_area_1 && <section>
                      Area: {data.grad_area_1}
                  </section>}
              </section>
              <section className = "Graduate_Info result_text">
                  {data.grad_uni_name_2 && <section>
                      Graduate: {data.grad_uni_name_2}
                  </section>}

                  {data.grad_prog_name_2 && <section>
                      Program: {data.grad_prog_name_2}
                  </section>}

                  {data.grad_gpa_2 && <section>
                      GPA: {data.grad_gpa_2}
                  </section>}

                  {data.grad_major_2 && <section>
                      Major: {data.grad_major_2}
                  </section>}

                  {data.grad_area_2 && <section>
                      Area: {data.grad_area_2}
                  </section>}
              </section>
              <section className = "Graduate_Info result_text">
                  {data.grad_uni_name_3 && <section>
                      Graduate: {data.grad_uni_name_3}
                  </section>}

                  {data.grad_prog_name_3 && <section>
                      Program: {data.grad_prog_name_3}
                  </section>}

                  {data.grad_gpa_3 && <section>
                      GPA: {data.grad_gpa_3}
                  </section>}

                  {data.grad_major_3&& <section>
                      Major: {data.grad_major_3}
                  </section>}

                  {data.grad_area_3 && <section>
                      Area: {data.grad_area_3}
                  </section>}
              </section>
          </section>
          <section className = "demographic result_section">
              <h3>Demographic</h3>
              <section className='result_text'>
                  {data.demo_eth && <section>
                      Ethnicity: {data.demo_eth}
                  </section>}

                  {data.demo_gender && <section>
                      Gender: {data.demo_gender}
                  </section>}

                  {data.demo_firstgen && <section>
                      First-gen: {data.demo_firstgen}
                  </section>}

                  {data.demo_citizenship && <section>
                      Citizenship: {data.demo_citizenship}
                  </section>}
              </section>
          </section>
          <section className="result_section result_rec_whole">
              <h3>Recommenders</h3>
              {data.rec && <section className='result_text result_rec'> {data.rec}
              </section>}
          </section>
        </section>
    </section>

    </>
  )
}
export default ResultPage;

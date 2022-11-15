import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProfileHeader from './ProfileHeader'
import 'semantic-ui-css/semantic.min.css'
import './FormSection.css'
import NarBar from '../NavBar/NavBar'


export function ProfileFormAll(){

  const navigate = useNavigate();


  const [eduCount, setEduCount] = useState(0);
  const [resultCount, setResultCount] = useState(0);

  const formSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    fetch("http://127.0.0.1:5000/submit",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(formObject)
            })
    }

  return(

    <section className="profile_form_all">
    
    <NarBar />
    <form onSubmit={formSubmit} className="ui form">
      <ProfileHeader/>

      {/* Undergrad */}
      <h3>Education</h3>
      <section className="profile_grad profile_section">
        <label>
            <span>University name</span>
            <select name="edu_uni_name_1" className="ui selection dropdown">
                <option value={"Emory University"} className="option">Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>Degree Type</span>
            <select name="edu_degree_1" className="ui selection dropdown">
            <option>Select Degree Type</option>
            <option value={"Associate Degree"}>Associate Degree</option>
            <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
            <option value={"Master's Degree"}>Master’s Degree</option>
            <option value={"Doctoral Degree"}>Doctoral Degree</option>
            <option value={"Other"}>Other</option>
            </select>
        </label>

        <label>
            <span>GPA</span>
            <select name="edu_gpa_1" className="ui selection dropdown">
            <option>Select GPA</option>
            <option value={4.0}>4.0</option>
            <option value={3.9}>3.9</option>
            <option value={3.8}>3.8</option>
            <option value={3.7}>3.7</option>
            <option value={3.6}>3.6</option>
            <option value={3.5}>3.5</option>
            <option value={3.4}>3.4</option>
            <option value={3.3}>3.3</option>
            <option value={3.2}>3.2</option>
            <option value={3.1}>3.1</option>
            <option value={3.0}>3.0</option>
            <option value={2.9}>2.9</option>
            <option value={2.8}>2.8</option>
            <option value={2.7}>2.7</option>
            <option value={2.6}>2.6</option>
            <option value={2.5}>2.5</option>
            <option value={2.4}>2.4</option>
            <option value={2.3}>2.3</option>
            <option value={2.2}>2.2</option>
            <option value={2.1}>2.1</option>
            <option value={2.0}>2.0 or below</option>
            </select>
        </label>

        <label>
            <span>Major(s)</span>
            <div className="ui input"><input type="text" name='edu_major_1'/></div>
        </label>

        <label>
            <span>Minor(s)</span>
            <div className="ui input"><input type="text" name='edu_minor_1'/></div>
        </label>
      </section>
      {
        eduCount >= 1 && (<section className="profile_grad profile_section">
        <label>
            <span>University name</span>
            <select name="edu_uni_name_2" className="ui selection dropdown">
                <option value={"Emory University"} className="option">Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>Degree Type</span>
            <select name="edu_degree_2" className="ui selection dropdown">
            <option>Select Degree Type</option>
            <option value={"Associate Degree"}>Associate Degree</option>
            <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
            <option value={"Master's Degree"}>Master’s Degree</option>
            <option value={"Doctoral Degree"}>Doctoral Degree</option>
            <option value={"Other"}>Other</option>
            </select>
        </label>

        <label>
            <span>GPA</span>
            <select name="edu_gpa_2" className="ui selection dropdown">
            <option>Select GPA</option>
            <option value={4.0}>4.0</option>
            <option value={3.9}>3.9</option>
            <option value={3.8}>3.8</option>
            <option value={3.7}>3.7</option>
            <option value={3.6}>3.6</option>
            <option value={3.5}>3.5</option>
            <option value={3.4}>3.4</option>
            <option value={3.3}>3.3</option>
            <option value={3.2}>3.2</option>
            <option value={3.1}>3.1</option>
            <option value={3.0}>3.0</option>
            <option value={2.9}>2.9</option>
            <option value={2.8}>2.8</option>
            <option value={2.7}>2.7</option>
            <option value={2.6}>2.6</option>
            <option value={2.5}>2.5</option>
            <option value={2.4}>2.4</option>
            <option value={2.3}>2.3</option>
            <option value={2.2}>2.2</option>
            <option value={2.1}>2.1</option>
            <option value={2.0}>2.0 or below</option>
            </select>
        </label>

        <label>
            <span>Major(s)</span>
            <div className="ui input"><input type="text" name='edu_major_2'/></div>
        </label>

        <label>
            <span>Minor(s)</span>
            <div className="ui input"><input type="text" name='edu_minor_2'/></div>
        </label>
      </section>)
      }
      {
        eduCount >= 2 && (<section className="profile_grad profile_section">
        <label>
            <span>University name</span>
            <select name="edu_uni_name_3" className="ui selection dropdown">
                <option value={1} className="option">Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>Degree Type</span>
            <select name="edu_degree_3" className="ui selection dropdown">
            <option>Select Degree Type</option>
            <option value={"Associate Degree"}>Associate Degree</option>
            <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
            <option value={"Master's Degree"}>Master’s Degree</option>
            <option value={"Doctoral Degree"}>Doctoral Degree</option>
            <option value={"Other"}>Other</option>
            </select>
        </label>

        <label>
            <span>GPA</span>
            <select name="edu_gpa_3" className="ui selection dropdown">
            <option>Select GPA</option>
            <option value={4.0}>4.0</option>
            <option value={3.9}>3.9</option>
            <option value={3.8}>3.8</option>
            <option value={3.7}>3.7</option>
            <option value={3.6}>3.6</option>
            <option value={3.5}>3.5</option>
            <option value={3.4}>3.4</option>
            <option value={3.3}>3.3</option>
            <option value={3.2}>3.2</option>
            <option value={3.1}>3.1</option>
            <option value={3.0}>3.0</option>
            <option value={2.9}>2.9</option>
            <option value={2.8}>2.8</option>
            <option value={2.7}>2.7</option>
            <option value={2.6}>2.6</option>
            <option value={2.5}>2.5</option>
            <option value={2.4}>2.4</option>
            <option value={2.3}>2.3</option>
            <option value={2.2}>2.2</option>
            <option value={2.1}>2.1</option>
            <option value={2.0}>2.0 or below</option>
            </select>
        </label>

        <label>
            <span>Major(s)</span>
            <div className="ui input"><input type="text" name='edu_major_3'/></div>
        </label>

        <label>
            <span>Minor(s)</span>
            <div className="ui input"><input type="text" name='edu_minor_3'/></div>
        </label>
      </section>)
      } 
      {
        eduCount >= 3 && (<section className="profile_grad profile_section">
        <label>
            <span>University name</span>
            <select name="edu_uni_name_4" className="ui selection dropdown">
                <option value={1} className="option">Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>Degree Type</span>
            <select name="edu_degree_4" className="ui selection dropdown">
            <option>Select Degree Type</option>
            <option value={"Associate Degree"}>Associate Degree</option>
            <option value={"Bachelor's Degree"}>Bachelor's Degree</option>
            <option value={"Master's Degree"}>Master’s Degree</option>
            <option value={"Doctoral Degree"}>Doctoral Degree</option>
            <option value={"Other"}>Other</option>
            </select>
        </label>

        <label>
            <span>GPA</span>
            <select name="edu_gpa_4" className="ui selection dropdown">
            <option>Select GPA</option>
            <option value={4.0}>4.0</option>
            <option value={3.9}>3.9</option>
            <option value={3.8}>3.8</option>
            <option value={3.7}>3.7</option>
            <option value={3.6}>3.6</option>
            <option value={3.5}>3.5</option>
            <option value={3.4}>3.4</option>
            <option value={3.3}>3.3</option>
            <option value={3.2}>3.2</option>
            <option value={3.1}>3.1</option>
            <option value={3.0}>3.0</option>
            <option value={2.9}>2.9</option>
            <option value={2.8}>2.8</option>
            <option value={2.7}>2.7</option>
            <option value={2.6}>2.6</option>
            <option value={2.5}>2.5</option>
            <option value={2.4}>2.4</option>
            <option value={2.3}>2.3</option>
            <option value={2.2}>2.2</option>
            <option value={2.1}>2.1</option>
            <option value={2.0}>2.0 or below</option>
            </select>
        </label>

        <label>
            <span>Major(s)</span>
            <div className="ui input"><input type="text" name='edu_major_4'/></div>
        </label>

        <label>
            <span>Minor(s)</span>
            <div className="ui input"><input type="text" name='edu_minor_4'/></div>
        </label>
      </section>)
      } 
      <button type = "button" onClick={()=>setEduCount(eduCount+1)} className="change_button change_button_add"><span className="another_icon">+</span>Add Another Education <i>(Max. 4)</i></button>
      <button type = "button" onClick={()=>setEduCount(eduCount-1)} className="change_button change_button_delete"><span className="another_icon">-</span>Delete an Education</button>

      {/* Rec */}
      <h3>Recommenders</h3>

      <section className="profile_Rec profile_section">
        <label className="textarea">
            <span>Briefly decribe your recommenders</span>
            <textarea type="text" name="rec"/>
        </label>
      </section>


      {/* Application Results */}

      <h3>Application Results</h3>

      <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_1">
                <option value={"Emory University"}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_1"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_1"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_1">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_1">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_1">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>

      {
        resultCount >= 1 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_2">
                <option value={"Emory University"}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_2"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_2"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_2">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_2">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_2">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
        </section>
      }

      {
        resultCount >= 2 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_3">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_3"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_3"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_3">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_3">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_3">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 3 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_4">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_4"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_4"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_4">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_4">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_4">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 4 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_5">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_5"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_5"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_5">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_5">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_5">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 5 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_6">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_6"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_6"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_6">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_6">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_6">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 6 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_7">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_7"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_7"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_7">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_7">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_7">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 7 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_8">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_8"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_8"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_8">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_8">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_8">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 8 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_9">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_9"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_9"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_9">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_9">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_9">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 9 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_10">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_10"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_10"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_10">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_10">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_10">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 10 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_11">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_11"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_11"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_11">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_11">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_11">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      {
        resultCount >= 11 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_12">
                <option value={1}>Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>School</span>
            <input type="text" name="res_school_12"/>
        </label>

        <label>
            <span>Program Name</span>
            <input type="text" name="res_prog_12"/>
        </label>

        <label>
            <span>Funding</span>
            <select name="res_funding_12">
                <option>Select Funding</option>
                <option value={"No Funding"}>No Funding</option>
                <option value={"Partial Funding"}>Partial Funding</option>
                <option value={"Full Funding"}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_12">
              <option>Select Result</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Rejected"}>Rejected</option>
              <option value={"Waitlisted"}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_12">
                <option>Select Decision</option>
                <option value={"Accepted"}>Accepted</option>
                <option value={"Declined"}>Declined</option>
            </select>
        </label>
      </section>
      }

      <button type = "button" onClick={()=>setResultCount(resultCount+1)} className="change_button change_button_add"><span className="another_icon">+</span>Add Another Application Result <i>(Max. 12)</i></button>
      <button type = "button" onClick={()=>setResultCount(resultCount-1)} className="change_button change_button_delete"><span className="another_icon">-</span>Delete an Application Result</button>


      {/* Demographics  */}

      <h3>Demographics</h3>

      <section className="profile_undergrad profile_section">
        <label>
            <span>Ethnicity</span>
            <select name="demo_eth">
              <option>Select Ethnicity</option>
              <option value={"White"}>White</option>
              <option value={"Asian"}>Asian</option>
              <option value={"Black or African American"}>Black or African American</option>
              <option value={"Hispanic or Latino"}>Hispanic or Latino</option>
              <option value={"American Indian"}>American Indian</option>
              <option value={"Pacific Islander"}>Pacific Islander</option>
            </select>
        </label>

        <label>
            <span>Gender</span>
            <select name="demo_gender">
              <option>Select Gender</option>
              <option value={"Female"}>Female</option>
              <option value={"Male"}>Male</option>
              <option value={"Non-binary"}>Non-binary</option>
              <option value={"Other"}>Other</option>
            </select>
        </label>

        <label>
            <span>First-gen?</span>
            <select name="demo_fistgen">
              <option>Select First-gen</option>
              <option value={"No"}>No</option>
              <option value={"Yes"}>Yes</option>
            </select>
        </label>

        <label>
            <span>Citizenship</span>
            <select name="demo_citizenship">
              <option>Select Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Aland Islands">Aland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republi">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D Ivoire">Cote D Ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curacao">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
              <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="South Korea">South Korea</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao">Lao</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Barthelemy">Saint Barthelemy</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
              <option value="Saint Vincent and the GrenadinesVC">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Serbia and Montenegro">Serbia and Montenegro</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Sint Maarten">Sint Maarten</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands, British">Virgin Islands, British</option>
              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
        </label>

      </section>

      {/* Upload Files  */}
      
      <h3>Upload Statement of Purpose & CV</h3>

      <section className="profile_section" id="profile_upload" >
        <p>Please erase all your personal information</p><br/>
        <label><span>Upload Your Statement of Purpose</span><input type='file' name="sop" /></label><br />
        <label><span>Upload Your Curriculum vitae</span><input type='file' name="cv" /></label><br />
        <label id="hidden">
            <input type="checkbox" />
            <span>I have hidden all the information that I believe is sensitive</span>
        </label>
      </section >

      <button type="submit" id = "submitForm" onClick={() => { navigate('/submit'); }}>Submit</button>
    </form>
    </section>
  );
}

function Submit() {
  return <h2>Thanks for the submission!</h2>;
}

export default ProfileFormAll
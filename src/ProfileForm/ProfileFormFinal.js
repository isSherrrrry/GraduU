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
            .then((res) => { return res.json() })
            .then((result) => {console.log(result)});
    }

  return(

    <section className="profile_form_all">
    
    <NarBar />
    <form onSubmit={formSubmit} class="ui form">
      <ProfileHeader/>

      {/* Undergrad */}
      <h3>Education</h3>
      <section className="profile_grad profile_section">
        <label>
            <span>University name</span>
            <select name="edu_uni_name_1" className="ui selection dropdown">
                <option value={1} className="option">Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>Degree Type</span>
            <select name="edu_degree_1" className="ui selection dropdown">
            <option>Select Degree Type</option>
              <option value={1}>Associate Degree</option>
              <option value={2}>Bachelor's Degree</option>
              <option value={3}>Master’s Degree</option>
              <option value={4}>Doctoral Degree</option>
              <option value={5}>Others</option>
            </select>
        </label>

        <label>
            <span>GPA</span>
            <select name="edu_gpa_1" className="ui selection dropdown">
            <option>Select GPA</option>
              <option value={1}>4.0</option>
              <option value={2}>3.9</option>
              <option value={3}>3.8</option>
              <option value={4}>3.7</option>
              <option value={5}>3.6</option>
              <option value={6}>3.5</option>
              <option value={7}>3.4</option>
              <option value={8}>3.3</option>
              <option value={9}>3.2</option>
              <option value={10}>3.1</option>
              <option value={11}>3.0</option>
              <option value={12}>2.9</option>
              <option value={13}>2.8</option>
              <option value={14}>2.7</option>
              <option value={15}>2.6</option>
              <option value={16}>2.5</option>
              <option value={17}>2.4</option>
              <option value={18}>2.3</option>
              <option value={19}>2.2</option>
              <option value={20}>2.1</option>
              <option value={21}>2.0 or below</option>
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
                <option value={1} className="option">Emory Univeristy</option>
            </select>
        </label>

        <label>
            <span>Degree Type</span>
            <select name="edu_degree_2" className="ui selection dropdown">
            <option>Select Degree Type</option>
              <option value={1}>Associate Degree</option>
              <option value={2}>Bachelor's Degree</option>
              <option value={3}>Master’s Degree</option>
              <option value={4}>Doctoral Degree</option>
              <option value={5}>Others</option>
            </select>
        </label>

        <label>
            <span>GPA</span>
            <select name="edu_gpa_2" className="ui selection dropdown">
            <option>Select GPA</option>
              <option value={1}>4.0</option>
              <option value={2}>3.9</option>
              <option value={3}>3.8</option>
              <option value={4}>3.7</option>
              <option value={5}>3.6</option>
              <option value={6}>3.5</option>
              <option value={7}>3.4</option>
              <option value={8}>3.3</option>
              <option value={9}>3.2</option>
              <option value={10}>3.1</option>
              <option value={11}>3.0</option>
              <option value={12}>2.9</option>
              <option value={13}>2.8</option>
              <option value={14}>2.7</option>
              <option value={15}>2.6</option>
              <option value={16}>2.5</option>
              <option value={17}>2.4</option>
              <option value={18}>2.3</option>
              <option value={19}>2.2</option>
              <option value={20}>2.1</option>
              <option value={21}>2.0 or below</option>
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
              <option value={1}>Associate Degree</option>
              <option value={2}>Bachelor's Degree</option>
              <option value={3}>Master’s Degree</option>
              <option value={4}>Doctoral Degree</option>
              <option value={5}>Others</option>
            </select>
        </label>

        <label>
            <span>GPA</span>
            <select name="edu_gpa_3" className="ui selection dropdown">
            <option>Select GPA</option>
              <option value={1}>4.0</option>
              <option value={2}>3.9</option>
              <option value={3}>3.8</option>
              <option value={4}>3.7</option>
              <option value={5}>3.6</option>
              <option value={6}>3.5</option>
              <option value={7}>3.4</option>
              <option value={8}>3.3</option>
              <option value={9}>3.2</option>
              <option value={10}>3.1</option>
              <option value={11}>3.0</option>
              <option value={12}>2.9</option>
              <option value={13}>2.8</option>
              <option value={14}>2.7</option>
              <option value={15}>2.6</option>
              <option value={16}>2.5</option>
              <option value={17}>2.4</option>
              <option value={18}>2.3</option>
              <option value={19}>2.2</option>
              <option value={20}>2.1</option>
              <option value={21}>2.0 or below</option>
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
              <option value={1}>Associate Degree</option>
              <option value={2}>Bachelor's Degree</option>
              <option value={3}>Master’s Degree</option>
              <option value={4}>Doctoral Degree</option>
              <option value={5}>Others</option>
            </select>
        </label>

        <label>
            <span>GPA</span>
            <select name="edu_gpa_4" className="ui selection dropdown">
            <option>Select GPA</option>
              <option value={1}>4.0</option>
              <option value={2}>3.9</option>
              <option value={3}>3.8</option>
              <option value={4}>3.7</option>
              <option value={5}>3.6</option>
              <option value={6}>3.5</option>
              <option value={7}>3.4</option>
              <option value={8}>3.3</option>
              <option value={9}>3.2</option>
              <option value={10}>3.1</option>
              <option value={11}>3.0</option>
              <option value={12}>2.9</option>
              <option value={13}>2.8</option>
              <option value={14}>2.7</option>
              <option value={15}>2.6</option>
              <option value={16}>2.5</option>
              <option value={17}>2.4</option>
              <option value={18}>2.3</option>
              <option value={19}>2.2</option>
              <option value={20}>2.1</option>
              <option value={21}>2.0 or below</option>
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
                <option value={1}>Emory Univeristy</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_1">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_1">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
            </select>
        </label>
      </section>

      {
        resultCount >= 1 && <section className="profile_undergrad profile_section">
        <label>
            <span>University Applied</span>
            <select name="res_uni_2">
                <option value={1}>Emory Univeristy</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_2">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_2">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_3">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_3">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_4">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_4">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_5">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_5">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_6">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_6">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_7">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_7">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_8">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_8">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_9">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_9">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_10">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_10">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_11">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_11">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
            </select>
        </label>

        <label>
            <span>Application Result</span>
            <select name="res_app_12">
              <option>Select Result</option>
              <option value={1}>Accepted</option>
              <option value={2}>Rejected</option>
              <option value={3}>Waitlisted</option>
            </select>
        </label>

        <label>
            <span>Decision</span>
            <select name="res_dec_12">
                <option>Select Decision</option>
                <option value={1}>Accepted</option>
                <option value={2}>Declined</option>
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
              <option value={1}>White</option>
              <option value={2}>Asian</option>
              <option value={3}>Black or African American</option>
              <option value={4}>Hispanic or Latino</option>
              <option value={5}>American Indian</option>
              <option value={6}>Pacific Islander</option>
            </select>
        </label>

        <label>
            <span>Gender</span>
            <select name="demo_gender">
              <option>Select Gender</option>
              <option value={'Female'}>Female</option>
              <option value={'Male'}>Male</option>
              <option value={'nonbinary'}>Non-binary</option>
              <option value={'Other'}>Other</option>
            </select>
        </label>

        <label>
            <span>First-gen?</span>
            <select name="demo_fistgen">
              <option>Select First-gen</option>
              <option value={1}>No</option>
              <option value={2}>Yes</option>
            </select>
        </label>

        <label>
            <span>Citizenship</span>
            <select name="demo_citizenship">
              <option>Select Country</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, Democratic Republic of the Congo</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Cote D'Ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curacao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and Mcdonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="XK">Kosovo</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States of</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthelemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="CS">Serbia and Montenegro</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia and the South Sandwich Islands</option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.s.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
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
import React, { useState } from "react";
import ProfileGrad from './ProfileResult'

const Input = () => {
    return <ProfileGrad />;
  };

const Create = ({nextStep,prevStep,handleChange,values}) => {
    const {
        undergrad_name,
        under_GPA,
        under_Major,
        under_Minor,
        grad_Name,
        grad_GPA,
        grad_Major,
        grad_Area,
        program_Name,
        description,
        ethnicity,
        gender,
        first_gen,
        citizenship,
        uni_applied,
        program_name,
        funding,
        app_result,
        app_decision
    } = values;
    
    const [ProfileGradList, setProfileGrad] = useState([]);
    const onAddBtnClick = event => {
        setProfileGrad(ProfileGradList.concat(<Input key={ProfileGradList.length} />));
    };

    const Continue = e => {
        e.preventDefault();
        nextStep();
    };

    const Previous = e => {
        e.preventDefault();
        prevStep();
    };

    return(
        <section className="profile_grad_all profile_section_all">
            <h4>Application Results</h4>
            <section className="profile_undergrad profile_section">
            <label>
                <span>University Applied</span>
                <select
                onChange = {handleChange('uni_applied')}
                defaultValue = {values.uni_applied}>
                    <option value={1}>Emory Univeristy</option>
                </select>
            </label>

            <label>
                <span>School</span>
                <input type="text" 
                onChange = {handleChange('program_name')}
                defaultValue = {values.program_name}/>
            </label>

            <label>
                <span>Program Name</span>
                <input type="text" 
                onChange = {handleChange('description')}
                defaultValue = {values.description}/>
            </label>

            <label>
                <span>Funding</span>
                <select onChange = {handleChange('funding')}
                defaultValue = {values.funding}>
                    <option>Select Funding</option>
                    <option value={1}>No Funding</option>
                    <option value={2}>Partial Funding</option>
                    <option value={3}>Full Funding</option>
                </select>
            </label>

            <label>
                <span>Application Result</span>
                <select onChange = {handleChange('app_result')}
                defaultValue = {values.app_result}>
                    <option>Select Result</option>
                    <option value={1}>Accepted</option>
                    <option value={2}>Rejected</option>
                    <option value={3}>Waitlisted</option>
                </select>
            </label>

            <label>
                <span>Decision</span>
                <select onChange = {handleChange('app_decision')}
                defaultValue = {values.app_decision}>
                    <option>Select Decision</option>
                    <option value={1}>Accepted</option>
                    <option value={2}>Declined</option>
                </select>
            </label>
        </section>
            {ProfileGradList}
            <button onClick={onAddBtnClick}>+ Add another Grad Univeristy</button>
            <button onClick={Continue}>Next</button>
            <button onClick={Previous}>Previous</button>
        </section>
    ); 

}

export default Create;
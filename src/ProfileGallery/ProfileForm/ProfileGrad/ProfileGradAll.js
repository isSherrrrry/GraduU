import React, { useState } from "react";
import ProfileGrad from './ProfileGrad'

const Input = () => {
    return <ProfileGrad />;
  };

const Create = ({nextStep, prevStep, handleChange, values}) => {

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
            <h4>Graduate Education</h4>
            <section className="profile_undergrad profile_section">
            <label>
                <span>University name</span>
                <select onChange = {handleChange('grad_Name')}
                defaultValue = {values.grad_Name}>
                    <option value={1}>Emory Univeristy</option>
                </select>
            </label>

            <label>
                <span>GPA</span>
                <select onChange = {handleChange('grad_GPA')}
                defaultValue = {values.grad_GPA}>
                    <option value={1}>4.0</option>
                </select>
            </label>

            <label>
                <span>Major(s)</span>
                <input type="text" 
                onChange = {handleChange('grad_Major')}
                defaultValue = {values.grad_Major}/>
            </label>

            <label>
                <span>Area(s)</span>
                <input type="text" 
                onChange = {handleChange('grad_Area')}
                defaultValue = {values.grad_Area}/>
            </label>

            <label>
                <span>Program Name</span>
                <input type="text" 
                onChange = {handleChange('program_Name')}
                defaultValue = {values.program_Name}/>
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
import React, { useState } from "react";
import ProfileUndergrad from './ProfileUndergrad'
import '../FormSection.css'

const Input = () => {
    return <ProfileUndergrad />;
  };

const Create = ({nextStep, values, handleChange}) => {
    const [ProfileUndergradList, setProfileUndergrad] = useState([]);
    const onAddBtnClick = event => {
        setProfileUndergrad(ProfileUndergradList.concat(<Input key={ProfileUndergradList.length} />));
    };

    const Continue = e => {
        e.preventDefault();
        nextStep();
    };

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

    return(
        <section className="profile_undergrad_all profile_section_all">
            <h4>Undergraduate Education</h4>
            <section className="profile_grad profile_section">

            <label>
                <span>University name</span>
                <select
                onChange = {handleChange('undergrad_name')}
                defaultValue = {values.undergrad_name}>
                    <option value={1}>Emory Univeristy</option>
                </select>
            </label>

            <label>
                <span>GPA</span>
                <select
                onChange = {handleChange('under_GPA')}
                defaultValue = {values.under_GPA}>
                    <option value={1}>4.0</option>
                </select>
            </label>


            <label>
                <span>Major(s)</span>
                <input type="text" id='major'
                onChange = {handleChange('under_Major')}
                defaultValue = {values.under_Major}/>
            </label>

            <label>
                <span>Minor(s)</span>
                <input type="text" id='minor'
                onChange = {handleChange('under_Minor')}
                defaultValue = {values.under_Minor}/>
            </label>
        </section>
            {ProfileUndergradList}
            <button onClick={onAddBtnClick}>+ Add another Undergrad Univeristy</button>
            <button onClick={Continue}>Next</button>
        </section>
    ); 

}

export default Create;
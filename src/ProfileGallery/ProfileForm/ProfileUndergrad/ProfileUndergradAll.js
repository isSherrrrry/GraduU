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
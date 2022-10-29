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
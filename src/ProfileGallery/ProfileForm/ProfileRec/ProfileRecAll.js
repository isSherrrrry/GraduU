import React, { useState } from "react";
import ProfileGrad from './ProfileRec'

const Input = () => {
    return <ProfileGrad />;
  };

const Create = ({nextStep, prevStep, handleChange,values}) => {
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
        <section className="profile_rec_all profile_section_all">
            <h4>Recommenders</h4>
            <section className="profile_Rec profile_section">

            <label className="textarea">
                <span>Briefly decribe your recommenders</span>
                <textarea type="text"
                onChange = {handleChange('description')}
                defaultValue = {values.description}/>
            </label>
        </section>
            {ProfileGradList}
            <button onClick={onAddBtnClick}>+ Add another Recommender</button>
            <button onClick={Continue}>Next</button>
            <button onClick={Previous}>Previous</button>
        </section>
    ); 

}

export default Create;
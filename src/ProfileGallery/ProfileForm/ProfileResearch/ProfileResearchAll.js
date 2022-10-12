import React, { useState } from "react";
import ProfileGrad from './ProfileResearch'

const Input = () => {
    return <ProfileGrad />;
  };

const Create = ({page, setPage}) => {
    const [ProfileGradList, setProfileGrad] = useState([]);
    const onAddBtnClick = event => {
        setProfileGrad(ProfileGradList.concat(<Input key={ProfileGradList.length} />));
    };

    return(
        <section className="profile_grad_all profile_section_all">
            <h4>Research Experience</h4>
            <ProfileGrad />
            {ProfileGradList}
            <button onClick={onAddBtnClick}>+ Add another Researh Expeirence</button>
            <button onClick={() => {setPage(page + 1);}}>Next</button>
            <button onClick={() => {setPage(page - 1);}}>Previous</button>
        </section>
    ); 

}

export default Create;
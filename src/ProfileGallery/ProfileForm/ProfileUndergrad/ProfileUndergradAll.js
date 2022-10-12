import React, { useState } from "react";
import ProfileUndergrad from './ProfileUndergrad'
import '../FormSection.css'

const Input = () => {
    return <ProfileUndergrad />;
  };

const Create = ({page, setPage}) => {
    const [ProfileUndergradList, setProfileUndergrad] = useState([]);
    const onAddBtnClick = event => {
        setProfileUndergrad(ProfileUndergradList.concat(<Input key={ProfileUndergradList.length} />));
    };

    return(
        <section className="profile_undergrad_all profile_section_all">
            <h4>Undergraduate Education</h4>
            <ProfileUndergrad />
            {ProfileUndergradList}
            <button onClick={onAddBtnClick}>+ Add another Undergrad Univeristy</button>
            <button onClick={() => {setPage(page + 1);}}>Next</button>
        </section>
    ); 

}

export default Create;
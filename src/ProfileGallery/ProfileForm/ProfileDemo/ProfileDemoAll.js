import React, { useState } from "react";
import ProfileGrad from './ProfileDemo'

const Create = ({page, setPage}) => {

    return(
        <section className="profile_grad_all profile_section_all">
            <h4>Demographics</h4>
            <ProfileGrad />
            <button onClick={() => {setPage(page + 1);}}>Next</button>
            <button onClick={() => {setPage(page - 1);}}>Previous</button>
        </section>
    ); 

}

export default Create;
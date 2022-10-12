import React, { Component, useState } from "react";
import './ProfileHeader.css'

const Create = () => {
    return(
        <section className="profile_header">
            <h3>Profile Form</h3>
            <h4>Please Fill Out Your Past Application</h4>

            <section className="profile_from_all">
                <p className="profile_form_privacy_alert">***ALL FIELDS ARE OPTIONAL EXPECT APPLICATION RESULTS***</p>
                <p>Please only inlcude information when you apply to your PhD Programs</p>
            </section>

        </section> 
    ); 

}

export default Create;
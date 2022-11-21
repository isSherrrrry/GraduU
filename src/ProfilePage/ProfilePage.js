import React, { useState, useEffect } from "react";

import './ProfilePage.css'

const Create = () => {

    return(
      <section className="profile_whole">
        <section className="left">
          <section className='geninfo'>
            <h4>ericxue64</h4>
            <p>Emory University</p>
            <p>4th year PhD in Computer Security</p>
            <p>He/Him/His</p>
          </section>
          <section className='documents'>
            <h4>Download Documents</h4>
            <section className='CV'>
              <p>Download CV</p>
            </section>
            <section className='SOP'>
              <p>Download Statement of Purpose</p>
            </section>
          </section>

          <section className="submitted">
            <h4>Submitted Profile</h4>
            <span>View Profile</span>
            <span>Edit Profile</span>
          </section>

          <section className='completion'>
              <p>Your profile is 75% completed</p>
            </section>
        </section>

        

        <section className='right'>
          <section className='PorS'>
              <span id="saved_prog">Personal Information</span>
              <span >Saved Programs</span>
          </section>
          <section className='About profile_section'>
            <h4>About me</h4>
            <p className="desc">Data manager at Queen Savvy Lab,
            Nell Hodgson Woodruff School of Nursing at Emory University</p>
          </section>

          <section className='personal_info profile_section'>
            <h4>Personal Information</h4>
            <section className="personal_items">
              <section>
                Contact Email: eric.xue@emory.edu
              </section>
              <section>
                Pronoun: He/Him/His
              </section>
              <section>
                Gender: Male
              </section>
              <section>
                Race/Ethnicity: Asian
              </section>
              <section>
                LinkedIn: Click Here
              </section>
              <section>
                Research Gate: Click Here
              </section>
            </section>
          </section>

          <section className='footer'>
            <p>Note: Your personal profile will be shared with your submitted application.</p>
            <p id='underline'>All fields are optional</p>
          </section>

        </section>
      </section>
    );

}

export default Create;

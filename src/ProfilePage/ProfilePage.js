import React, { useState, useEffect } from "react";

import './ResultPage.css'
import './ResultSection.css'

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
            <h4>Documents</h4>
            <section className='CV'>
              <p>CV</p>
            </section>
            <section className='SOP'>
              <p>Statement of Purpose</p>
            </section>
            <section className='completion'>
              <p>Your profile is 75% completed</p>
            </section>
          </section>
        </section>

        <section className='right'>
          <section className='PorS'>
            <h4>Personal Information</h4>
            <h4>Saved Programs</h4>
          </section>
          <section className='About'>
            <h3>About me</h3>
            <p>Data manager at Queen Savvy Lab,
            Nell Hodgson Woodruff School of Nursing at Emory University</p>
          </section>
          <section className='personal_info'>
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
              Lindedin: https://www.linkedin.com/in/chen-xue-1729ba213/
            </section>

            <section>
              Research Gate: https://www.linkedin.com/in/chen-xue-1729ba213/
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

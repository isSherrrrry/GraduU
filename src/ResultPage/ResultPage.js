import React, { Component, useState } from "react";

import './ResultPage.css'
import NavBar from '../NavBar/NavBar'
import Demo from './Demographic/Demo'
import Graduate from './EducationSection/Graduate'
import Undergrad from './EducationSection/Undergrad'
import Recommend from './Recommend/Recommendation'
import Result from './ResultSections/ApplicationResults'
import GenInfo from './GenInfo/GenInfo'

const Create = () => {
    
    return(
        <>
        <NavBar/>

        <section className="result_whole">
            <section className="left">
                <GenInfo/>
            </section>
            <section className="right">
                <Result/>
                <Undergrad/>
                <Graduate/>
                <Demo/>
                <Recommend/>
            </section>
        </section>
        
        </>

    ); 

}
        
export default Create;
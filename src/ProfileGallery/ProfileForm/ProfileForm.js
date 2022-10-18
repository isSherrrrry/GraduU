import React, { Component, useState } from "react";
import ProfileHeader from './ProfileHeader'
import './ProfileForm.css'

import ProfileUndergradAll from './ProfileUndergrad/ProfileUndergradAll'
import ProfileGradAll from './ProfileGrad/ProfileGradAll'
import ProfileUploadAll from './ProfileUpload/ProfileUploadAll'
import ProfileDemo from './ProfileDemo/ProfileDemoAll'
import ProfileRec from './ProfileRec/ProfileRecAll'
import ProfileResults from './ProfileResults/ProfileResultAll'

export default class Create extends Component  {

    state = {
        step :1,
        undergrad_name: '',
        under_GPA: '',
        under_Major: '',
        under_Minor: '',
        grad_Name: '',
        grad_GPA: '',
        grad_Major: '',
        grad_Area: '',
        program_Name: '',
        description: '',
        ethnicity: '',
        gender: '',
        first_gen: '',
        citizenship:'',
        uni_applied:'',
        program_name:'',
        funding:'',
        app_result:'',
        app_decision:''
    }
    
    prevStep = () =>{
        const {step} = this.state;
        this.setState({step: step-1})
    }

    nextStep = () =>{
        const {step} = this.state;
        this.setState({step: step+1}) 
    }

    handleChange = input => e =>{
        this.setState({[input]:e.target.value});
    }

    
    render(){

        const {step} = this.state;
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
        } = this.state;
    
        const values = {
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
        }

        switch(step){
            case 1:
                return(
                    <section className="ProfileFormAll">
                        <ProfileHeader/>
                        <ProfileUndergradAll 
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    </section>
                )

            case 2:
                return(
                    <section className="ProfileFormAll">
                        <ProfileHeader/>
                        <ProfileGradAll
                        prevStep = {this.prevStep} 
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    </section>
                )

                
            case 3:
                return(
                    <section className="ProfileFormAll">
                        <ProfileHeader/>
                        <ProfileRec
                        prevStep = {this.prevStep} 
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    </section>
                )

            case 4:
                return(
                    <section className="ProfileFormAll">
                        <ProfileHeader/>
                        <ProfileDemo 
                        prevStep = {this.prevStep} 
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    </section>
                )
            
            case 5:
                return(
                    <section className="ProfileFormAll">
                        <ProfileHeader/>
                        <ProfileResults 
                        prevStep = {this.prevStep} 
                        nextStep={this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    </section>
                )
            case 6:
                return(
                    <section className="ProfileUploadAll">
                        <ProfileHeader/>
                        <ProfileUploadAll 
                        prevStep = {this.prevStep} 
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    </section>
                )
            default:
        }
    }

    
}





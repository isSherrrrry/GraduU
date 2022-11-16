import React, { Component, useState, useEffect } from "react";
import searchIcon from './searchIcon.png'
import './SearchResult.css'
import { Route, useNavigate } from 'react-router-dom';


export function SearchResult(){
    const navigate = useNavigate();

    return(
        <section className="searchresult">

            <form className='searchForm_1'>
                <select name='search_method' className="searchMethod_1" size={2}>
                    <option value={"by_uni"}>Search By Univeristy</option>
                    <option value={"by_major"}>Search By Major</option>
                </select>
                <div className='searchBarAll_1'>
                    <div className='searchBar_1'><input 
                    type="text" 
                    /></div>
                    <button type='submit' onClick={()=> navigate('/search')} className="submitButton_1"><img src={searchIcon}/></button>
                </div>
            </form> 

            <section className="searchterm">
                Search results for <u>Computer Secuirty</u>
            </section>

            <section className="searchresult_all" onClick={()=> navigate('/resultPage')}>

                <section className="searchresult_each">
                    <p className="search_username">ericxue64</p>
                    <p className="search_education">
                        <span>from</span>
                        <span className="search_from_edu search_tag">Emory University</span>
                        <span className="search_from_field search_tag">CS</span>
                        <span>to</span>
                        <span className="search_to_edu search_tag">MIT</span>
                        <span className="search_to_field search_tag">HCI</span>
                    </p>
                    <p>
                        <span className="search_ethnicity search_tag">Asian</span>
                        <span className="search_gender search_tag">Male</span>
                        <span className="search_sop search_tag">Statement of Purpose Avaliable</span>
                        <span className="search_cv search_tag">CV Avaliable</span>
                    </p>
                </section>

                <section className="searchresult_each">
                    <p className="search_username">ericxue64</p>
                    <p className="search_education">
                        <span>from</span>
                        <span className="search_from_edu search_tag">Emory University</span>
                        <span>to</span>
                        <span className="search_to_edu search_tag">MIT</span>
                        <span className="search_field search_tag">HCI</span>
                    </p>
                    <p>
                        <span className="search_ethnicity search_tag">Asian</span>
                        <span className="search_gender search_tag">Male</span>
                        <span className="search_sop search_tag">Statement of Purpose Avaliable</span>
                        <span className="search_cv search_tag">CV Avaliable</span>
                    </p>
                </section>

            </section>

        </section>
    )
}


export default SearchResult
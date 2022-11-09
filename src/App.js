import './App.css';
import React, { Component, useState } from "react";
// import ProfileForm from './ProfileGallery/ProfileForm/ProfileForm'
// import ResultPage from './ResultPage/ResultPage'
import {ProfileFormAll} from './ProfileForm/ProfileFormFinal'
import ProfileGalleryMain from './ProfileGalleryMain'
import {SearchResult} from './SearchResult/SearchResult'
import ResultPage from './ResultPage/ResultPage'


function App() {

  return (
    <div className="App">
      <ResultPage />
    </div>
  );
}

export default App;

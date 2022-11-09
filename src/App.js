import './App.css';
import React, { Component, useState } from "react";
// import ProfileForm from './ProfileGallery/ProfileForm/ProfileForm'
// import ResultPage from './ResultPage/ResultPage'
import {ProfileFormAll} from './ProfileForm/ProfileFormFinal'
import ProfileGalleryMain from './ProfileGalleryMain'
import {SearchResult} from './SearchResult/SearchResult'


function App() {

  return (
    <div className="App">
      <SearchResult />
    </div>
  );
}

export default App;

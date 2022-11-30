import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {ProfileFormAll} from './ProfileForm/ProfileFormFinal'
import ProfileGalleryMain from './ProfileGalleryMain'
import {SearchResult} from './SearchResult/SearchResult'
import ResultPage from './ResultPage/ResultPage'
import NavBar from './NavBar/NavBar'
import Login from './LogIn/LogInAll'
import ThankYou from './ProfileForm/ThanksSubmit'
import ProfilePage from './ProfilePage/ProfilePage'
import ProfileEdit  from './ProfileEdit/ProfileEdit'
import ErrorPage from './ErrorPage/ErrorPage'
import NotLoggedIn from './NotLoggedIn/NotLoggedIn'
import ThanksSignUp from './ThanskSignUp/ThanksSignUp'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProfileGalleryMain/>} />
        <Route path="/search" element={<SearchResult/>} />
        <Route path="/form" element={<ProfileFormAll/>} />
        <Route path="/resultPage" element={<ResultPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/form-edited" element={<ProfileEdit />} />
        <Route path="/nologin" element={<NotLoggedIn />} />
        <Route path="/thankssignup" element={<ThanksSignUp />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

import './ProfileGalleryMain.css'
import searchIcon from './SearchResult/searchIcon.png'
import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router';


const Create = () => {

    const navigate = useNavigate();

    const [option, setOption] = useState('by_uni');
    const [promptText, setPromptText] = useState('Search by the university you want to apply for!')
    const [term, setTerm] = useState('');
    
    const handleChange = event => {
        setTerm(event.target.value);
    };


    const changeText = e =>{
        if(e.target.value == 'by_major'){
            setPromptText('Search by the major you want to apply for!');
            console.log({promptText});
        }
        if(e.target.value == 'by_uni'){
            setPromptText('Search by the university you want to apply for!');
            console.log({promptText});
        }
        
    }
    
    return(
        <section className='profile_all_with'>
            <section className='profile_gallery_main'>
                <section className='profile_main_title'>
                    <p>Welcome to the</p>
                    <p className='text'>Profile Gallery</p>
                </section>

                <form className='searchForm'>
                    <select name='search_method' onChange={changeText} className="searchMethod" size={2}>
                        <option value={"by_uni"}>Search By Univeristy</option>
                        <option value={"by_major"}>Search By Major</option>
                    </select>
                    <div className='searchBarAll'>
                        <div className='searchBar'><input 
                        type="text" 
                        name="searchTerm"
                        onChange={handleChange}
                        placeholder = {promptText}/></div>
                        <button type='submit' onClick={()=> navigate('/search', {state:{id:term}})} className="submitButton"><img src={searchIcon}/></button>
                    </div>
                </form>
                <p className='want'>Want to submit your past application? Start <b>HERE</b></p>
                <p className='main_submit'>Submit Profile</p>
            </section>
        </section>
    ); 

}

export default Create;
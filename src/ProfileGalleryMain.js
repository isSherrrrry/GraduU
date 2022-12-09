import './ProfileGalleryMain.css'
import searchIcon from './SearchResult/searchIcon.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [option, setOption] = useState('by_uni');
    const [promptText, setPromptText] = useState('Search by the university you want to apply for!')

    const getUsername = localStorage.getItem("username");



    const changeText = e => {
        if (e.target.value === 'by_major') {
            setPromptText('Search by the major you want to apply for!');
            setOption('by_major');
        }
        if (e.target.value === 'by_uni') {
            setPromptText('Search by the university you want to apply for!');
            setOption('by_uni');
        }

    }

    const searchQuery = (event) => {
        event.preventDefault();
        setLoading(true);
        if (option === 'by_uni') {
            let query = event.target.searchTerm.value;
            fetch("http://34.172.189.28:3389/search_uni/" + query)
                .then((res) => res.json())
                .then((res) => {
                    var newState = {
                        'posts': res,
                        'query': query,
                        'length': res.length
                    }
                    setLoading(false);
                    navigate('/search', { state: newState })
                });
        }
        else {
            let query = event.target.searchTerm.value;
            fetch("http://34.172.189.28:3389/search_major/" + query)
                .then((res) => res.json())
                .then((res) => {
                    var newState = {
                        'posts': res,
                        'query': query,
                        'length': res.length
                    }
                    navigate('/search', { state: newState })
                    setLoading(false);
                });
        }
    }

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 830px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    return (
        <>
        {matches && loading === false && (
            <section className='profile_all_with'>
                <section className='profile_gallery_main'>
                    <section className='profile_main_title'>
                        <p>Welcome to the</p>
                        <p className='text'>Profile Gallery</p>
                    </section>

                    <form onSubmit={searchQuery} className='searchForm'>
                        <select name='search_method' onChange={changeText} className="searchMethod" size={2}>
                            <option value={"by_uni"}>Search By University</option>
                            <option value={"by_major"}>Search By Major</option>
                        </select>
                        <div className='searchBarAll'>
                            <div className='searchBar'><input
                                type="text"
                                name="searchTerm"
                                placeholder={promptText} /></div>
                            <button type='submit' className="submitButton"><img src={searchIcon} alt=""/></button>
                        </div>
                    </form>
                    <p className='want'>Want to submit your past application? Start <b>HERE</b></p>
                    <p className='form_button'>
                        {
                            getUsername? <span onClick={()=> navigate('/form')} className='main_submit'>Submit Profile</span>:
                            <span onClick={()=> navigate('/nologin')} className='main_submit'>Submit Profile</span>
                        }
                    </p>
                </section>
            </section>
        )}

        {matches && loading === true && (
            <section className='searchresult'>
                <form onSubmit={searchQuery} className='searchForm_1'>
                    <select name='search_method' onChange={changeText} className="searchMethod_1" size={2}>
                        <option value={"by_uni"}>Search By University</option>
                        <option value={"by_major"}>Search By Major</option>
                    </select>
                    <div className='searchBarAll_1'>
                        <div className='searchBar_1'><input
                            type="text"
                            name="searchTerm"
                        /></div>
                        <button type='submit' className="submitButton_1"><img src={searchIcon} alt=""/></button>
                    </div>
                </form>
                <section className='searchterm'>
                    Search results are currently loading...
                </section>
            </section>
        )}

        {!matches && (
            <section className='profile_gallery_main_mini'>
                
                <section className='profile_main_title_mini'>
                    <p className='text3_mini'>Welcome to</p>
                    <p className='text_mini'>Profile Gallery</p>
                    <p className='text2_mini'>Search the college/major you want to apply for!</p>
                </section>

                <form onSubmit={searchQuery} className='searchForm_mini'>
                    <label className='searchMethod_mini'>
                        <span>Search Method: </span>
                        <select name='search_method' onChange={changeText} className="searchMethodInput_mini">
                            <option>Search By University</option>
                            <option>Search By Major</option>
                        </select>
                    </label>
                    <div className='searchBarAll_mini'>
                        <div className='searchBar_mini'><input
                            type="text"
                            name="searchTerm"
                            placeholder="Search Here!" /></div>
                        <button type='submit' className="submitButton_mini"><img src={searchIcon} alt=""/></button>
                    </div>
                </form>

                
                <p className='want_mini'>Want to submit your past application? Start <b>HERE</b></p>
                <p className='form_button_mini'>
                    {
                        getUsername? <span onClick={()=> navigate('/form')} className='main_submit_mini'>Submit Profile</span>:
                        <span onClick={()=> navigate('/nologin')} className='main_submit_mini'>Submit Profile</span>
                    }
                </p>
            </section>
        )}
        </>
    );

}

export default Create;



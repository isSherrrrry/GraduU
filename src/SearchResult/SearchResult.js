import React, { useState } from "react";
import searchIcon from './searchIcon.png'
import './SearchResult.css'
import { useNavigate, useLocation } from 'react-router-dom';


export function SearchResult() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [searchOption, setSearchOption] = useState('by_uni');

    //Constants that handle rendering of the SearchResults.
    const { state } = useLocation();
    const postsList = state.posts;
    const query = state.query;
    const len = state.length;
    var posts = [];

    for (var i = 1; i < len; i++) {
        var element = 'id_' + i;
        posts.push(postsList[element]);
    }

    //Selects search type.
    const toggleSearchType = (event) => {
        if (event.target.value === 'by_major') {
            setSearchOption('by_major');
        }
        if (event.target.value === 'by_uni') {
            setSearchOption('by_uni');
        }
    }

    const searchQuery = (event) => {
        event.preventDefault();
        setLoading(true);
        if (searchOption === 'by_uni') {
            let query = event.target.searchTerm.value;
            fetch("http://127.0.0.1:5000/search_uni/" + query)
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
        else {
            let query = event.target.searchTerm.value;
            fetch("http://127.0.0.1:5000/search_major/" + query)
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

    const resultClick = (key) => {
        let username = postsList['id_' + key].name;
        navigate('/resultPage', { state: { 'username': username } });
    }

    return (
        <section className="searchresult">
            <form onSubmit={searchQuery} className='searchForm_1'>
                <select name='search_method' onChange={toggleSearchType} className="searchMethod_1" size={2}>
                    <option value={"by_uni"}>Search By Univeristy</option>
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
            {loading === false ? (
                <section className="searchterm">
                    Search results for <u>{query}</u>
                </section>

            ) : (
                <section className="searchterm">
                    Search results are currently loading...
                </section>
            )}
            <section className="searchresult_all">
                {posts.map(post => (
                    <section className="searchresult_each" onClick={() => resultClick(post.id)} key={post.id}>
                        <p className="search_username">{post.name}</p>
                        <p className="search_education">
                            <span>Applied to:</span>
                            {post.curr_uni && <span className="search_to_edu search_tag">{post.curr_uni}</span>}
                            {post.curr_school && <span className="search_to_field search_tag">{post.curr_school}</span>}
                            {post.curr_program && <span className="search_to_prog search_tag">{post.curr_program}</span>}
                        </p>
                        <p>
                            {post.race && <span className="search_ethnicity search_tag">{post.race}</span>}
                            {post.gender && <span className="search_gender search_tag">{post.gender}</span>}
                            {post.sop && <span className="search_sop search_tag">{post.sop}</span>}
                            {post.cv && <span className="search_cv search_tag">{post.cv}</span>}
                        </p>
                    </section>
                ))}
            </section>

        </section>
    )
}


export default SearchResult

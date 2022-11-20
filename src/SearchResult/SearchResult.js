import React, { Component, useState, useEffect } from "react";
import searchIcon from './searchIcon.png'
import './SearchResult.css'
import { Route, useNavigate, useLocation } from 'react-router-dom';


export function SearchResult() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const { state } = useLocation();
    const { id } = state;

    useEffect(() => {
        fetch('http://127.0.0.1:5000/search/' + id)
            .then((res) => res.json())
            .then((res) => {
                var hold = [];
                var length = res['length'];
                for (var i = 1; i < length; i++) {
                    var query = 'id_' + i;
                    hold.push(res[query]);
                }
                setPosts(hold);
            })
    }, [id])

    return (
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
                    <button type='submit' onClick={() => navigate('/search')} className="submitButton_1"><img src={searchIcon} /></button>
                </div>
            </form>

            <section className="searchterm">
                Search results for <u>{id}</u>
            </section>

            <section className="searchresult_all" onClick={() => navigate('/resultPage')}>
                {posts.map(post => (
                    <section className="searchresult_each">
                        <p className="search_username">{post.name}</p>
                        <p className="search_education">
                            <span>from</span>
                            {post.prev_uni && <span className="search_from_edu search_tag">{post.prev_uni}</span>}
                            {post.prev_major && <span className="search_from_field search_tag">{post.prev_major}</span>}
                            <span>to</span>
                            {post.curr_uni && <span className="search_to_edu search_tag">{post.curr_uni}</span>}
                            {post.curr_major && <span className="search_to_field search_tag">{post.curr_major}</span>}
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

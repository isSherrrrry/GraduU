import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Create = ({ page, setPage }) => {
    return (

        <Routes>
            <Route path='/' element={<Default> </Default>}>
            </Route>
            <Route path='/submit' element={<Submit ></Submit>}> </Route>
        </Routes>

    );

}

function Default({ page, setPage }) {
    const navigate = useNavigate();
    return (
        <section className="profile_grad_all profile_section_all" >
            <h4>Upload Statement of Purpose & CV</h4>
            <p>Please erase all your personal information</p>
            <button>Upload SOP</button><br />
            <button>CV</button><br />
            <input type="checkbox" />
            <label htmlFor="vehicle1">I have hidden all the information that I believe is sensitive</label><br></br>

            <button onClick={() => { setPage(page - 1); }}>Previous</button><br />

            <button onClick={() => { navigate('/submit'); send(); }}>Submit</button>
        </section >
    );

}
function Submit() {
    return <h2>Thanks for the submission!</h2>;
}

function send() {
    fetch("http://127.0.0.1:5000",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ university: 'emory', gpa: '1.5' })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}

export default Create;

const Create = ({page, setPage}) => {
    return(
        <section className="profile_grad_all profile_section_all">
            <h4>Upload Statement of Purpose & CV</h4>
            <p>Please erase all your personal information</p>
            <button>Upload SOP</button><br/>
            <button>CV</button><br/>
            <input type="checkbox"/>
            <label for="vehicle1">I have hidden all the information that I believe is sensitive</label><br></br>
            
            <button onClick={() => {setPage(page - 1);}}>Previous</button><br/>

            <button>Submit</button>
        </section>
    ); 

}

export default Create;
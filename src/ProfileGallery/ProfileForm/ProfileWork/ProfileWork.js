import '../FormSection.css'

const Create = () => {
    
    return(
        <section className="profile_undergrad profile_section">
            <label>
                <span>Company Description</span>
                <input type="text"/>
            </label>

            <label>
                <span>Position</span>
                <input type="text" />
            </label>

            <label>
                <span>Industry</span>
                <select>
                    <option value={1}>Technology</option>
                </select>
            </label>

            <label>
                <span>Years of Experience</span>
                <select>
                    <option value={1}>0-1</option>
                </select>
            </label>


    
        </section>
    ); 

}

export default Create;
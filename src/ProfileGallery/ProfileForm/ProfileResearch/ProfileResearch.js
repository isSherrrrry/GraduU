import '../FormSection.css'

const Create = () => {
    
    return(
        <section className="profile_undergrad profile_section">
            <label>
                <span>Subject</span>
                <select>
                    <option value={1}>Computer Science</option>
                </select>
            </label>

            <label>
                <span>Area</span>
                <input type="text" />
            </label>

            <label className="textarea">
                <span>Publication(s)</span>
                <textarea type="text" />
            </label>

        </section>
    ); 

}

export default Create;
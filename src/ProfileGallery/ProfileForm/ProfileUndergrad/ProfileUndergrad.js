const Create = () => {
    
    return(
        <section className="profile_grad profile_section">

            

            <label>
                <span>University name</span>
                <select>
                    <option value={1}>Emory Univeristy</option>
                </select>
            </label>

            <label>
                <span>GPA</span>
                <select>
                    <option value={1}>4.0</option>
                </select>
            </label>

            <label>
                <span>Univeristy Description</span>
                <input type="text" />
            </label>

            <label>
                <span>Major(s)</span>
                <input type="text" />
            </label>

            <label>
                <span>Minor(s)</span>
                <input type="text" />
            </label>

            <label className="textarea">
                <span>Activities</span>
                <textarea type="text" />
            </label>

            <label className="textarea">
                <span>Volunteer Experience</span>
                <textarea type="text"/>
            </label>
        </section>
    ); 

}

export default Create;
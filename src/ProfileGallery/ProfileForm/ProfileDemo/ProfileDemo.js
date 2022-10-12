import '../FormSection.css'

const Create = () => {
    
    return(
        <section className="profile_undergrad profile_section">
            <label>
                <span>Ethnicity</span>
                <select>
                    <option value={1}>Hispanic</option>
                </select>
            </label>

            <label>
                <span>Gender</span>
                <select>
                    <option value={1}>Non-binary</option>
                </select>
            </label>

            <label>
                <span>First-gen?</span>
                <select>
                    <option value={1}>No</option>
                </select>
            </label>

            <label>
                <span>Citizenship</span>
                <select>
                    <option value={1}>United States</option>
                </select>
            </label>

        </section>
    ); 

}

export default Create;
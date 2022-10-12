import '../FormSection.css'

const Create = () => {
    
    return(
        <section className="profile_undergrad profile_section">
            <label>
                <span>University Applied</span>
                <select>
                    <option value={1}>Emory Univeristy</option>
                </select>
            </label>

            <label>
                <span>School</span>
                <input type="text" />
            </label>

            <label>
                <span>Program Name</span>
                <input type="text" />
            </label>

            <label>
                <span>Funding</span>
                <select>
                    <option value={1}>Fully Funded</option>
                </select>
            </label>

            <label>
                <span>Application Result</span>
                <select>
                    <option value={1}>Accepted</option>
                </select>
            </label>

            <label>
                <span>Decision</span>
                <select>
                    <option value={1}>Not going</option>
                </select>
            </label>
        </section>
    ); 

}

export default Create;
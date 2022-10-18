import '../FormSection.css'

const Create = ({handleChange,values}) => {

    const {
        undergrad_name,
        under_GPA,
        under_Major,
        under_Minor,
        grad_Name,
        grad_GPA,
        grad_Major,
        grad_Area,
        program_Name,
        description,
        ethnicity,
        gender,
        first_gen,
        citizenship,
        uni_applied,
        program_name,
        funding,
        app_result,
        app_decision
    } = values;
    
    return(
        <section className="profile_undergrad profile_section">
            <label>
                <span>University Applied</span>
                <select
                onChange = {handleChange('uni_applied')}
                defaultValue = {values.uni_applied}>
                    <option value={1}>Emory Univeristy</option>
                </select>
            </label>

            <label>
                <span>School</span>
                <input type="text" 
                onChange = {handleChange('program_name')}
                defaultValue = {values.program_name}/>
            </label>

            <label>
                <span>Program Name</span>
                <input type="text" 
                onChange = {handleChange('description')}
                defaultValue = {values.description}/>
            </label>

            <label>
                <span>Funding</span>
                <select onChange = {handleChange('funding')}
                defaultValue = {values.funding}>
                    <option value={1}>Fully Funded</option>
                </select>
            </label>

            <label>
                <span>Application Result</span>
                <select onChange = {handleChange('app_result')}
                defaultValue = {values.app_result}>
                    <option value={1}>Accepted</option>
                </select>
            </label>

            <label>
                <span>Decision</span>
                <select onChange = {handleChange('app_decision')}
                defaultValue = {values.app_decision}>
                    <option value={1}>Not going</option>
                </select>
            </label>
        </section>
    ); 

}

export default Create;
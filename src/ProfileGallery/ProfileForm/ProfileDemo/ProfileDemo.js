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
                <span>Ethnicity</span>
                <select 
                onChange = {handleChange('ethnicity')}
                defaultValue = {values.ethnicity}>
                    <option value={1}>Hispanic</option>
                </select>
            </label>

            <label>
                <span>Gender</span>
                <select onChange = {handleChange('gender')}
                defaultValue = {values.gender}>
                    <option value={1}>Non-binary</option>
                </select>
            </label>

            <label>
                <span>First-gen?</span>
                <select onChange = {handleChange('first_gen')}
                defaultValue = {values.first_gen}>
                    <option value={1}>No</option>
                </select>
            </label>

            <label>
                <span>Citizenship</span>
                <select onChange = {handleChange('citizenship')}
                defaultValue = {values.citizenship}>
                    <option value={1}>United States</option>
                </select>
            </label>

        </section>
    ); 

}

export default Create;
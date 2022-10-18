import '../FormSection.css'

const Create = ({handleChange, values}) => {

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
        <section className="profile_Rec profile_section">

            <label className="textarea">
                <span>Briefly decribe your recommenders</span>
                <textarea type="text"
                onChange = {handleChange('description')}
                defaultValue = {values.description}/>
            </label>
        </section>
    ); 

}

export default Create;
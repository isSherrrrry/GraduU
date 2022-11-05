import '../ResultSection.css'

const Create = () => {
    
    return(
        <section className = "demographic result_section">
            <h3>Demographic</h3>
            <section className='result_text'>
                <section>
                    Ethnicity: <span id = "ethnicity">Asian</span>
                </section>

                <section>
                    Gender: <span id = "gender">Male</span>
                </section>

                <section>
                    First-gen: <span id = "first_gen">No</span>
                </section>

                <section>
                    Citizenship: <span id = "citizenship ">China</span>
                </section>
            </section>
        </section>

    ); 

}
        
export default Create;
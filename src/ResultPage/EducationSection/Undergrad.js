import '../ResultSection.css'

const Create = () => {
    
    return(
        <section className="result_section result_underg">
            <h3>Undergrad Education</h3>
            <section className = "undergrad_Info result_text">
                <section>
                    Undergrad: <span id = "undergrad_Name">Emory University</span>
                </section>

                <section>
                    GPA: <span id = "under_GPA">4.0</span>
                </section>

                <section>
                    Major: <span id = "under_Major">Computer Science & Sociology</span>
                </section>

                <section>
                    Minor: <span id = "under_Minor">Psychology</span>
                </section>
            </section>
        </section>
    ); 

}
    
export default Create;
import '../ResultSection.css'

const Create = () => {
    
    return(
        <section className="result_section result_grad">
            <h3>Graduate Education</h3>
            <section className = "Graduate_Info result_text">
                <section>
                    Graduate: <span id = "grad_Name">Emory University</span>
                </section>

                <section>
                    Program: <span id = "program_Name">PM3</span>
                </section>

                <section>
                    GPA: <span id = "grad_GPA">4.0</span>
                </section>

                <section>
                    Major: <span id = "grad_Major">Computer Science</span>
                </section>

                <section>
                    Area: <span id = "grad_Area">Computer Security</span>
                </section>

            </section>
        </section>
        ); 

    }
        
    export default Create;
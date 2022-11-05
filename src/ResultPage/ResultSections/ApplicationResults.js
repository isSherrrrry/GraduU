
const Create = () => {
    
    return(
        <section className = "app_results result_section">
            <section className="app_results_header">
                <h3>Application Results</h3>
                <p>Final Choice: <b>Emory University</b></p>
            </section>
            <section className = "tags">
                <span className="uni status_accepted">Emory University<span className= "hover"><span className="hover_lab">Queen Savvy Lab</span><span className="hover_funding">Fully Funded</span></span></span> 
                <span className="uni status_accepted">Princeton University</span> 
                <span className="uni status_accepted">CMU</span> 
                <span className="uni status_accepted">GaTech</span> 
                <span className="uni status_rejected">MIT Media Lab</span> 
                <span className="uni status_rejected">UC Berkeley</span> 
                <span className="uni status_rejected">Duke University</span>
                <span className="uni status_waitlisted">UCI</span> 
                <span className="uni status_waitlisted">Standford University</span> 
            </section>
            <section id = "result_status_indi">
                <section className = "accept status">
                    <span className="circle"></span>
                    <span>ACCEPT</span>
                </section>
                <section className = "waitlisted status">
                    <span className="circle"></span>
                    <span>WAITLISTED</span>
                </section>
                <section className = "rejected status">
                    <span className="circle"></span>
                    <span>REJECTED</span>
                </section>
            
            </section>

        </section>
    ); 

}

export default Create;
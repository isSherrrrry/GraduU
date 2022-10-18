
const Create = () => {
    
    return(
        <section class = "app_results">
            <section>
                <h3>Application Results</h3>
            </section>
            <section class = "tags">
                <span>Emory University<span class = "hover"><span>Queen Savvy Lab</span><span>Fully Funded</span></span></span> 
                <span>Princeton University</span> 
                <span>CMU</span> 
                <span>GaTech</span> 
                <span>MIT Media Lab</span> 
                <span>UC Berkeley</span> 
                <span>Duke University</span>
                <span>UCI</span> 
                <span>Standford University</span> 
            </section>
            <section class = "result_status">
                <section class = "accept">
                    <span>circle1</span>
                    <span>ACCEPT</span>
                </section>
                <section class = "waitlisted">
                    <span>circle2</span>
                    <span>WAITLISTED</span>
                </section>
                <section class = "rejected">
                    <span>circle3</span>
                    <span>REJECTED</span>
                </section>
                <section class = "commit">
                    <span>circle4</span>
                    <span>COMMITTED</span>
                </section>
            </section>

        </section>
    ); 

}

export default Create;
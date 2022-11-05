import '../ResultSection.css'

const Create = () => {
    
    return(
        <section className='geninfo'>
            <section className='text_info'>
                <p id='info_id'>ericxue64</p>
                <p id='info_pronoun'>He/Him/His</p>
                <p id='info_desc'>Data manager at Queen Savvy Lab, Nell Hodgson Woodruff School of Nursing at Emory University</p>
            </section>
            <section className='contacts'>
                <h4>Contacts</h4>
                <p>Email: <a href = "mailto: eric.xue@emory.edu">eric.xue@emory.edu</a></p>
                <p>LinkedIn: <span><a href= "https://www.linkedin.com/in/yijunliu23/" target="_blank">Go to LinkedIn</a></span></p>
            </section>
            <section className='downloads'>
                <h4>Documents</h4>
                <p>CV ↓</p>
                <p>Statement of Purpose ↓</p>
            </section>
        </section>
    ); 

}
    
export default Create;
import './NavBar.css'
const Create = () => {
    
    return(
        <section className='navbar_whole'>
            <section className='upper'>
                <img src={require('./logo.png')}/>
                <p>Log in / Sign Up</p>
            </section>
            <section className='bottom'>
                <span><u>Profile Gallery</u></span>
                <span>Lab Search</span>
                <span>Professor Search</span>
            </section>
        </section>
    ); 

}
    
export default Create;
import './ProfileGalleryMain.css'
import NavBar from './NavBar/NavBar'

const Create = () => {
    return(
        <section className='profile_all_with'>
            <NavBar/>
            <section className='profile_gallery_main'>
                <section className='profile_main_title'>
                    <p>Welcome to the</p>
                    <p className='text'>Profile Gallery</p>
                </section>

                <div className='searchBar'><input type="text" value = "Get to know aboput your fellow applicants!" /></div>
                <p>Want to submit your past application? Start HERE</p>
                <p>Submit Profile</p>
            </section>
        </section>
    ); 

}

export default Create;
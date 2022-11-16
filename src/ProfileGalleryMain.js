import './ProfileGalleryMain.css'
import NavBar from './NavBar/NavBar'

const Create = () => {
    return(
        <section className='profile_all_with'>
            <section className='profile_gallery_main'>
                <section className='profile_main_title'>
                    <p>Welcome to the</p>
                    <p className='text'>Profile Gallery</p>
                </section>

                <div className='searchBar'><input type="text" placeholder = "Search for Univeristy" /></div>
                <p className='want'>Want to submit your past application? Start HERE</p>
                <p className='main_submit'>Submit Profile</p>
            </section>
        </section>
    ); 

}

export default Create;
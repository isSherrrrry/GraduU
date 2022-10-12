import React, { useState } from "react";
import ProfileHeader from './ProfileHeader'
import './ProfileForm.css'

import ProfileUndergradAll from './ProfileUndergrad/ProfileUndergradAll'
import ProfileGradAll from './ProfileGrad/ProfileGradAll'
import ProfileWorkAll from './ProfileWork/ProfileWorkAll'
import ProfileUploadAll from './ProfileUpload/ProfileUploadAll'
import ProfileAward from './ProfileAward/ProfileAwardAll'
import ProfileDemo from './ProfileDemo/ProfileDemoAll'
import ProfileRec from './ProfileRec/ProfileRecAll'
import ProfileResults from './ProfileResults/ProfileResultAll'
import ProfileResearch from './ProfileResearch/ProfileResearchAll'


const Create = () =>  {

    const [page, setPage] = useState(0);

    const componentList = [
        <ProfileUndergradAll 
        page={page}
        setPage={setPage}
        />,

        <ProfileGradAll 
        page={page}
        setPage={setPage}
        />,

        <ProfileWorkAll 
        page={page}
        setPage={setPage}
        />,

        <ProfileResearch
        page={page}
        setPage={setPage}
        />,

        <ProfileAward
        page={page}
        setPage={setPage}
        />,

        <ProfileRec
        page={page}
        setPage={setPage}
        />,

        <ProfileDemo
        page={page}
        setPage={setPage}
        />,

        <ProfileResults
        page={page}
        setPage={setPage}
        />,


        <ProfileUploadAll
        page={page}
        setPage={setPage}
        />
    ]

    return(
        <section className="ProfileFormAll">
            <ProfileHeader/>
            <section className="profile_content_all">{componentList[page]}</section>
        </section>
    )
}

export default Create;






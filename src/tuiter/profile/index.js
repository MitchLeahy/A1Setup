import React from 'react'
import ProfilePage from './profile-page'
import { useSelector } from "react-redux";




const ProfileComponent = () => {
    const currentProfile= useSelector((state) => state.profile)
    return(
        <div>
            <h1>Profile</h1>
            {/* this needs to be altered */}
            {currentProfile.map(profile =>  <ProfilePage
            key ={profile._id}
            profile = {profile}/>
        )}
            
        </div>
    )}

export default ProfileComponent
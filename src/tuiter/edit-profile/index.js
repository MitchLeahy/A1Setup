import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {editProfileFunc} from "../reducers/profile-reducers.js";
import {Link} from "react-router-dom";



const EditProfileComponent = () => {
    
    const dispatch = useDispatch();
    const currentProfile= useSelector((state) => state.profile)
    const profile = currentProfile[0]
    let [inputFirstNameState, setInputFirstNameState] = useState(profile.firstName);
    let [inputLastNameState, setInputLastNameState] = useState(profile.lastName);
    let [inputHandleState, setInputHandleState] = useState(profile.handle);
    let [inputBioState, setInputBioState] = useState(profile.bio);
    let [inputLocationState, setInputLocationState] = useState(profile.location);
    let [inputDateOfBirthState, setInputDateOfBirthState] = useState(profile.dateOfBirth);

    const updateProfileHandler = () => {
        dispatch(editProfileFunc({
            ...profile,
            bio: inputBioState,
            dateOfBirth: inputDateOfBirthState,
            firstName: inputFirstNameState,
            handle: inputHandleState,
            lastName: inputLastNameState,
            location: inputLocationState,
        }));
    }
    
   
   

    return(
        <div>
            <h1>Edit Profile</h1>
            <div className="row">
            <Link to ="../profile" className = "btn btn-primary" onClick={updateProfileHandler}>Update Profile</Link>
            </div>
            <label htmlFor= "firstNameInput"> First Name</label>
            <input type = "text" id= "firstNameInput" title = "Name" value={inputFirstNameState} placeholder="First Name" 
                  className="form-control border-1"
                  onChange={(event) => setInputFirstNameState(event.target.value)}>
          </input>
            <label htmlFor= "lastNameInput"> Last Name</label>
            <input type = "text" id= "lastNameInput" title = "Name" value={inputLastNameState} placeholder="Last Name"
                    className="form-control border-1"
                    onChange={(event) => setInputLastNameState(event.target.value)}>
            </input>
            <label htmlFor= "handleInput"> Handle</label>
            <input type = "text" id= "handleInput" title = "Name" value={inputHandleState} placeholder="Handle"
                    className="form-control border-1"
                    onChange={(event) => setInputHandleState(event.target.value)}>
            </input>
            <label htmlFor= "bioInput"> Bio</label>
            <input type = "text" id= "bioInput" title = "Name" value={inputBioState} placeholder="Bio"
                    className="form-control border-1"
                    onChange={(event) => setInputBioState(event.target.value)}>
            </input>

            <label htmlFor= "locationInput"> Location</label>
            <input type = "text" id= "locationInput" title = "Name" value={inputLocationState} placeholder="Location"
                    className="form-control border-1"
                    onChange={(event) => setInputLocationState(event.target.value)}>
            </input>



        </div>
    )}

export default EditProfileComponent;
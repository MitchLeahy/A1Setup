import {editProfile} from "../../reducers/profile-reducers";
import {Link} from "react-router-dom";

const ProfilePage = ({profile}) => {
    return(
        <div>
            <div className="row"> 
                <div className="col-1">
                <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-11">
                    <div className="row">
                        <h4 className = "ms-0 ps-10">{profile.firstName} {profile.lastName}</h4>
                    </div>
                    <div className="row">
                        <h5 className = "text-secondary">{profile.tweetsCount} Tweets</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img alt = "Responsive image" className= "img-within-div " src = {profile.bannerPicture}/>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <img alt = "" className= "profile-profile-pic " src = {profile.profilePicture}/>
                </div>
                <div className="col-4  align-center">
                    
                    <Link to= "/tuiter/edit-profile" className="btn btn-primary">Edit Profile</Link>
                </div>
            </div>
            <div className="row">
                <h4 >{profile.firstName} {profile.lastName}</h4>
            </div>
            <div className="row">
                <h5 className = "text-secondary">{profile.handle}</h5>
            </div>
            <div className="row">
                <span className = "text-secondary">{profile.bio}</span>
            </div>
            <div className="row">
                <div className="col-12">
                    <i class="bi bi-geo-alt"></i>
                    <span className = "m-1 text-secondary">{profile.location}</span>
                    <i class="bi bi-globe-americas ms-2"></i>
                    <span className = "m-1 text-secondary">{profile.dateOfBirth}</span>
                    <i class="bi bi-calendar ms-2"></i>
                    <span className = "m-1 text-secondary">{profile.dateJoined}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <span className = "text-secondary fw-bold">{profile.followingCount}</span>
                    <span className = "me-1 text-secondary"> Following</span>
                    <span className = "ms-1 text-secondary fw-bold">{profile.followersCount}</span>
                    <span className = "text-secondary"> Followers</span>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage
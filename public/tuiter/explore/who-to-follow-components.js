import whoToFollowList from "./whoToFollowList.js";

function whoToFollowComponent(wtf) {
return(`
    <div class = "list-group-item list-group-item-action bg-color-lgtgrey">

            <div class = "row">
                
                <div class = "col-2 "> <img class  = "side-bar-profile-pic rounded-circle" src= ${wtf.avatarIcon}>
                </div>
                <div class = "col-6 ">
                    <span text-dark> ${wtf.handle}  </span><i class="fa-solid fa-check"></i> <br>
                    <span class = "text-secondary">${wtf.userName}</span>
                </div>
                <div class = "col-4 ">
                    <button class ="btn btn-primary follow-btn rounded-pill"> Follow</button>
                </div>
            </div>
        </div>
`)

}

export default whoToFollowComponent;
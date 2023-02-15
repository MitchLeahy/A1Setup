import whoToFollowList from "./whoToFollowList.js";

function whoToFollowComponent(wtf) {
return(`
    <div class = "list-group-item list-group-item-action ">

            <div class = "row color-white">
                
                <div class = "col-2 "> <img class  = "side-bar-profile-pic rounded-circle" src= ${wtf.avatarIcon}>
                </div>
                <div class = "col-6 ">
                    <span text-dark> ${wtf.handle}  </span><i class="fa-solid fa-check"></i> <br>
                    <span>${wtf.userName}</span>
                </div>
                <div class = "col-4 ">
                    <button class ="btn btn-primary follow-btn rounded-pill"> Follow</button>
                </div>
            </div>
        </div>
`)

}

export default whoToFollowComponent;
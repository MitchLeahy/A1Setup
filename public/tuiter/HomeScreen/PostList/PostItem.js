function PostItem(post) {
    return(`
    <li class = "list-group-item no-border top-border bottom-border">
        <div class = "row">
            <div class= "col-1"> <img class = post-profile-pic src= ${post.avatarIcon}> </div>
            <div class = "col-11"> 
                <div class = "row">
                    <span class = "fw-bold color-white">${post.userName} <i class="fa-solid fa-check"></i> @ ${post.handle} - ${post.time}</span>
                </div>

                <div class = "row">
                    <span class = "color-white">${post.title}</span>
                </div>

                <div class = "post-content mt-1">
                    <div class = "row p-1">
                        <img class = "rounded " src= ${post.image}>
                    </div>
                    <div class = "row mb-1 p-2">
                        <div class = "row">
                            <span class = "color-white">${post.title}</span>
                        </div>
                        <div class = "row">
                            <span class = "color-white">${post.content}</span>
                        </div>
                    </div>
                </div>
                <div class = "row mt-2">
                
                    
                    <div class = "col-3 ">
                        <a href = "#"><span class="fa-solid fa-heart color-red"> </span></a>
                        <span class = "left-padding-12 font-lgrey"> 222</span>
                    </div>

                    <div class = "col-3">
                        <a href = "#"><span class="fa-sharp fa-solid fa-retweet"> </span></a>
                        <span class = "left-padding-12 font-lgrey"> 1122</span>
                    </div>
                    <div class = "col-3">
                        <a href = "#"><span class="fa-regular fa-comment"> </span></a>
                        <span class = "left-padding-12 font-lgrey"> 292</span>
                    </div>
                    <div class = "col-3">
                        <a href = "#"><span class="fa-solid fa-share"> </span></a>
                        <span class = "left-padding-12 font-lgrey"> 242</span>
                    </div>
                 

                </div>

            </div>
        </div

    </li>`)
    
    }
    
    export default PostItem;
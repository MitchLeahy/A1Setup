import navigation from "../explore/navigation.js";
// import PostItem from "./PostList/PostItem.js";
import PostItems from "./PostList/PostItems.js";
import PostList from "./PostList/PostList.js";
import addSelectedOnClick from "./Functions/ClickFunctions.js";





function init() {
    $("#explore").append(`
    <div class = "container mt-2">

        <div class="row"> 

            <!--hyper link col-->
            <div class = "col-2 col-lg-2 ">
            ${navigation()}
            </div>
            
            <!--feed col-->
            <div class = "col-10 col-lg-10  side-border">
                ${PostItems(PostList)}   
            </div>

        </div>
    </div>
    
    `);
    addSelectedOnClick(".list-group-item");
    addSelectedOnClick(".nav-item");

}
$(init);

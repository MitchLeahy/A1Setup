import navigation from "./navigation.js";
import mainContents from "./main-contents.js";
import whoToFollow from "./who-to-follow.js";
 



function init() {
    $("#explore").append(`
    <div class = "container mt-2">

        <div class="row"> 

            <!--hyper link col-->
            <div class = "col-2 col-lg-2 ">
            ${navigation()}
            </div>
            
            <!--feed col-->
            <div class = "col-10 col-lg-6  side-border">
                ${mainContents()}   
            </div>

            <!--who to follow col-->
            <div class = "d-none d-lg-block col-lg-4">  
                ${whoToFollow()}
            </div>
        </div>
    </div>
        
    
    `);

}
$(init);

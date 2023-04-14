import navigation from "./navigation.js";
import ExploreCompenents from "./ExploreComponent.js";
import whoToFollow from "./who-to-follow.js";
 
import tuits from "./tuits.js";   

import addSelectedOnClick from "../HomeScreen/Functions/ClickFunctions.js";

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
                ${ExploreCompenents(tuits)}   
            </div>

            <!--who to follow col-->
            <div class = "d-none d-lg-block col-lg-4">  
                ${whoToFollow()}
            </div>
        </div>
    </div>
        
    
    `);
   addSelectedOnClick(".list-group-item");
   

}
$(init);

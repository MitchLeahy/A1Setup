
import tuitComponent from "./tuit-components.js";

function ExploreCompenents(lst) {
    return(`
    <div class = "row">

            <div class = "position-relative col-10" >
                
                <input class = "ps-4 form-control w-100 rounded-pill bg-color-lgtgrey" placeholder = "Search Tuiter"/>
                <i class="fa-sharp fa-solid fa-magnifying-glass position-absolute wd-search"></i> 
            
            </div>
            <div class = "col-2 position-relative">
                <a href = #><i class="fa-solid fa-gear wd-cog position-absolute"></i></a>
            </div>
        </div>
        <ul class="nav mt-2">

            <li class="nav-item">
                <a class="nav-link active tab-selected" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link color-grey" href="#">Trending</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link color-grey" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link color-grey" href="#">sports</a>
            </li>
            <li class="d-none d-lg-block nav-item">
                <a class="nav-link color-grey" href="#" >Entertainment</a>
            </li>
        </ul>

        <div class = "position-relative ">
            <img class = "mt-2" src = "https://image.cnbcfm.com/api/v1/image/107118394-1663162493777-SpaceX-1568010239185944576-img1.jpg?v=1668704401&w=740&h=416&ffmt=webp&vtcrop=y" width = 100%>
            <h1 class = "position-absolute bottom-0 left-0 text-white"> SpaceX's Starship</h1>
        </div>

        <ul class = "list-group ">
            ${lst.map(tuit => tuitComponent(tuit)).join('')}
        </ul>



    `)
}

export default ExploreCompenents;
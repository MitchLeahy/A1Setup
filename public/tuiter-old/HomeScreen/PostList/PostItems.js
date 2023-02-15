import PostItem from "./PostItem.js";

function    PostItems(lst) {
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

        <ul class = "list-group ">
            ${lst.map(post => PostItem(post)).join('')}
        </ul>



    `)
}

export default PostItems;
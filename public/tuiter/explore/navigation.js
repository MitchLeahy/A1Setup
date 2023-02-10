function navigation() {
    return(`
    <div class="list-group ">
                 
                        
        <a href="tuiter/index.html" class="list-group-item list-group-item-action no-border">
            <span class="fa-brands fa-twitter color-lgtblue"></span>
        </a>

        <a href="tuiter/index.html" class="color-balck list-group-item list-group-item-action no-border position-relative">
            <span class="fa-solid fa-house-chimney span-float-left-inline pt-1"></span>
            <span class ="d-none d-xl-block span-float-left-inline ms-3 "> Home</span>
        </a>


        <a href="index.html" class="color-balck list-group-item list-group-item-action text-bold no-border">
            <i class="fa-solid fa-hashtag span-float-left-inline pt-1"></i> <span class ="d-none d-xl-block span-float-left-inline ms-3">Explore</span></a>
            
            

        <a href="tuiter/notifications/index.html" class="color-balck list-group-item list-group-item-action no-border">
            <span class="fa-solid fa-bell span-float-left-inline pt-1"></span> 
            <span class ="d-none d-xl-block span-float-left-inline ms-3">Notifications</span></a>

        <a href="tuiter/messages/index.html" class="color-balck list-group-item list-group-item-action no-border">
            <span class="fa-solid fa-envelope span-float-left-inline pt-1"></span> 
            <span class ="d-none d-xl-block span-float-left-inline ms-3">Messages</span></a>

        <a href="tuiter/bookmarks/index.html" class="color-balck list-group-item list-group-item-action no-border">
            <span class="fa-solid fa-bookmark span-float-left-inline pt-1"></span>
            <span class ="d-none d-xl-block span-float-left-inline ms-3">Bookmarks</span></a>
            
        <a href="tuiter/lists/index.html" class="color-balck list-group-item list-group-item-action no-border">
            <span class="fa-solid fa-list span-float-left-inline pt-1"></span> 
            <span class ="d-none d-xl-block span-float-left-inline ms-3">Lists</span></a>   

        <a href="tuiter/profile.html" class="color-balck list-group-item list-group-item-action no-border">
            <span class="fa-solid fa-user span-float-left-inline pt-1"></span>
            <span class ="d-none d-xl-block span-float-left-inline ms-3">Profile</span></a>    

        <a href="tuiter/more/index.html" class="color-balck list-group-item list-group-item-action no-border">
            <span class="fa-solid fa-ellipsis span-float-left-inline pt-1"></span>
            <span class ="d-none d-xl-block span-float-left-inline ms-3">More</span></a>   
    </div>
    <button class ="btn btn-primary w-100 mt-2 rounded-pill bg-color-lgtblue"> Tuit</button>

    `)
}

export default navigation;
import tuits from "./tuits.js";

function tweetComponent(tuit) {
return(`
<li class = "list-group-item no-border top-border">
<div class = "row ">
    <div class ="col-8 position-relative">
        <div class = "text-secondary">${tuit.topic}</div>
        <div class = "fw-bold">${tuit.userName}-${tuit.time}</div>
        <div class = "text-secondary">${tuit.title}</div>
    </div>
    <div class ="col-4"><img class = "tuit-pic" src = ${tuit.image}></div>
</div>
</li>`)

}

export default tweetComponent;
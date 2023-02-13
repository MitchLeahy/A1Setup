import whoToFollowList from "./whoToFollowList.js";
import whoToFollowComponent from "./who-to-follow-components.js";

function whoToFollow() {
    return(`
    <div class="list-group ">

        <div class = "list-group-item list-group-item-action color-white"> Who to follow</div>

        ${whoToFollowList.map(wtf => whoToFollowComponent(wtf)).join('')}
    </div>

    `)

}

export default whoToFollow;
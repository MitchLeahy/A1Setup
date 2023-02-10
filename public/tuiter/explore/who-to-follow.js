import whoToFollowList from "./whoToFollowList.js";
import whoToFollowComponent from "./who-to-follow-components.js";

function whoToFollow() {
    return(`
    <div class="list-group bg-color-lgtgrey">

        <div class = "list-group-item list-group-item-action bg-color-lgtgrey text-bold"> Who to follow</div>

        ${whoToFollowList.map(wtf => whoToFollowComponent(wtf)).join('')}
    </div>

    `)

}

export default whoToFollow;
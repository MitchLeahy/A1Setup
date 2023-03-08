import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRetweet, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import {likeTuit,unlikeTuit} from '../../../reducers/tuits-reducer';
import {useDispatch} from "react-redux"


const TuitStats = ({post}) => {

    const dispatch = useDispatch();

    const likeTuitHandler = (post) => {
        dispatch(likeTuit(post))
    }
    const unlikeTuitHandler = (post) => {
        dispatch(unlikeTuit(post))
    }
   
    return(
        <div className = "row mt-2">

            <div className = "col-3">
                <FontAwesomeIcon icon={faComment} />
                <span className = "left-padding-12 font-lgrey"> {post.replies}</span>
            </div>

            <div className = "col-3">
                <FontAwesomeIcon icon={faRetweet} />
                <span className = "left-padding-12 font-lgrey"> {post.retuits}</span>
            </div>
         
            {post.liked &&
            <div className = "col-3 " onClick= {() => unlikeTuitHandler(post)}>
                <FontAwesomeIcon icon={faHeart} className ="text-danger" />
                <span className = "left-padding-12 font-lgrey"> {post.likes}</span>
            </div>}
            {!post.liked &&
            <div className = "col-3 " onClick= {() => likeTuitHandler(post)}>
                <FontAwesomeIcon icon={faHeart}  />
                <span className = "left-padding-12 font-lgrey"> {post.likes}</span>
            </div>}
            <div className = "col-3">
                <FontAwesomeIcon icon={faShare} />
                <span className = "left-padding-12 font-lgrey"> </span>
            </div>
                 

        </div>

    );
}

export default TuitStats;
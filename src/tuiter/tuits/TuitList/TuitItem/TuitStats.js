import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRetweet, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import {likeTuit,unlikeTuit} from '../../../reducers/tuits-reducer';
import {useDispatch} from "react-redux"
import { updateTuitThunk } from '../../../services/tuits-thunks.js';

const TuitStats = ({post}) => {

    const dispatch = useDispatch();

    // const likeTuitHandler = (post) => {
    //     dispatch(likeTuit(post))
    // }
    // const unlikeTuitHandler = (post) => {
    //     dispatch(unlikeTuit(post))
    // }
   
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
            <div className = "col-3">
                <i onClick={() => dispatch(updateTuitThunk({
                ...post,
                likes: post.likes - 1,
                liked: false

                }))} className="bi bi-heart-fill me-2 text-danger"></i>
                <span className = "left-padding-12 font-lgrey"> {post.likes}</span>
            </div>
            }

            { !post.liked &&
            <div className = "col-3">
                <i onClick={() => dispatch(updateTuitThunk({
                ...post,
                likes: post.likes + 1,
                dislikes: post.dislikes - 1,
                liked: true,
                disliked: false
                }))} className="bi bi-heart-fill me-2"></i>
                <span className = "left-padding-12 font-lgrey"> {post.likes}</span>
            </div>
            }
            {post.disliked &&
            <div className = "col-3">
                <i onClick={() => dispatch(updateTuitThunk({
                ...post,
                dislikes: post.dislikes - 1,
                disliked: false
                }))} className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
                <span className = "left-padding-12 font-lgrey"> {post.dislikes}</span>
            </div>
            }

            { !post.disliked &&
            <div className = "col-3">
                <i onClick={() => dispatch(updateTuitThunk({
                ...post,
                likes: post.likes - 1,
                dislikes: post.dislikes + 1,
                disliked: true,
                liked: false
                }))} className="bi bi-hand-thumbs-down-fill me-2"></i>
                <span className = "left-padding-12 font-lgrey"> {post.dislikes}</span>
            </div>
            }


                 

        </div>

    );
}

export default TuitStats;
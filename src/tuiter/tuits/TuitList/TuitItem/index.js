import React from 'react';
import TuitStats from './TuitStats';
import {useDispatch} from "react-redux";

import {deleteTuit} from "../../../reducers/tuits-reducer";


const TuitItem = ({post}) => {
    
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => { dispatch(deleteTuit(id));}

    return(
    
    <li className = "list-group-item no-border top-border bottom-border">
        <div className = "row">
            
            <div className= "col-2"> <img className = "post-profile-pic" alt = "" src= {`${post.image}`}/> </div>
            
            <div className = "col-10"> 

                <div className = "row">
                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
                    <span className = " color-black">{post.userName} <i className="fa-solid fa-check"></i> {post.handle} - {post.time}</span>
                </div>
                <div className = "row">
                    <span className = "color-black">{post.tuit}</span>
                </div>

                <TuitStats key={post._id} post={post}/>

            </div>
        </div>
    </li>
    
    );
    
    };
    
    export default TuitItem;
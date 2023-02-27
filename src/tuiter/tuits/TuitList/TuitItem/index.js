import React from 'react';
import TuitStats from './TuitStats';




const TuitItem = ({post}) => {
    

    return(
    
    <li className = "list-group-item no-border top-border bottom-border">
        <div className = "row">
            
            <div className= "col-2"> <img className = "post-profile-pic" alt = "" src= {`${post.image}`}/> </div>
            
            <div className = "col-10"> 

                <div className = "row">
                    <span className = " color-black">{post.userName} <i className="fa-solid fa-check"></i> {post.handle} - {post.time}</span>
                </div>
                <div className = "row">
                    <span className = "color-black">{post.title}</span>
                </div>

                {/* <div className = "border border-black rounded mt-1">
                    <div className = "row">
                        <img className = "img-within-div" alt = "" src= {`${post.image}`}/>
                    </div> */}

                    {/* <div className = "row mb-1 p-2">
                        <div className = "row">
                            <span className = "color-black">{post.title}</span>
                        </div>
                        <div className = "row">
                            <span className = "color-black">{post.content}</span>
                        </div>

                    </div>
                </div> */}
                <TuitStats key={post._id} post={post}/>

            </div>
        </div>
    </li>
    
    );
    
    };
    
    export default TuitItem;
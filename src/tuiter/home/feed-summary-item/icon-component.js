import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRetweet, faComment, faShare } from '@fortawesome/free-solid-svg-icons'


const IconComponent = () => {
    return(
        <div className = "row mt-2">
                
            
            <div className = "col-3 ">
                <a href = "#"><FontAwesomeIcon icon={faHeart} /></a>
                <span className = "left-padding-12 font-lgrey"> 222</span>
            </div>

            <div className = "col-3">
                <a href = "#"><FontAwesomeIcon icon={faRetweet} /></a>
                <span className = "left-padding-12 font-lgrey"> 1122</span>
            </div>
            <div className = "col-3">
                <a href = "#"><FontAwesomeIcon icon={faComment} /></a>
                <span className = "left-padding-12 font-lgrey"> 292</span>
            </div>
            <div className = "col-3">
                <a href = "#"><FontAwesomeIcon icon={faShare} /></a>
                <span className = "left-padding-12 font-lgrey"> 242</span>
            </div>
                 

        </div>

    );
}

export default IconComponent;
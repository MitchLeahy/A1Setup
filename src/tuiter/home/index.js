import React from "react";
import feedArray from './feed.json';
import FeedSummaryItem from "./feed-summary-item";


const HomeComponent = () => {
 return(
   <ul className="list-group">
     {
       feedArray.map(post =>
         <FeedSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default HomeComponent;
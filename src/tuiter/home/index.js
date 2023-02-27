import React from "react";

import FeedSummaryItem from "./feed-summary-item";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  const feedArray = useSelector((state)=>state.tuits)
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



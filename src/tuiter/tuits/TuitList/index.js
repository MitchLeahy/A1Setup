import React from "react";
import TuitItem from "./TuitItem";
import { useSelector } from "react-redux";

const TuitComponent = () => {
  const feedArray = useSelector((state)=>state.tuits)
 return(
   <ul className="list-group">
     {
       feedArray.map(post =>
         <TuitItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default TuitComponent;



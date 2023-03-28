import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {useDispatch, useSelector } from "react-redux";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const TuitComponent = () => {
  
const {tuits, loading} = useSelector((state)=>state.tuits)
const dispatch = useDispatch();
useEffect(() => {
  dispatch(findTuitsThunk())
}, [dispatch])

 return(
   <ul className="list-group">
      {/* if this were true it would display loading properly */}
    {
      loading && <li key = "loading6"className="list-group-item">Loading...</li>
    }
     {
       tuits.map(post =>
         <TuitItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default TuitComponent;



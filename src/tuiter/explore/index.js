import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
 return(
   <div>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute 
                       wd-nudge-up"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
     <ul className="nav nav-pills mb-2">
       <li className="nav-item">
         <a href = "/" className="nav-link active">For You</a>
       </li>
       <li className="nav-item">
         <a href = "/trending" className="nav-link">Trending</a>
       </li>
       <li className="nav-item">
         <a href = "/news" className="nav-link">News</a>
       </li>
     </ul>
     <div className="position-relative mb-2">
       <img alt = "" src="https://image.cnbcfm.com/api/v1/image/107118394-1663162493777-SpaceX-1568010239185944576-img1.jpg?v=1668704401&w=740&h=416&ffmt=webp&vtcrop=y" className="w-100"/>
       <h1 className="position-absolute wd-nudge-up text-white">
         SpaceX Starship</h1>
     </div>
     <PostSummaryList/>
   </div>
 );
};
export default ExploreComponent;
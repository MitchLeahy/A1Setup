import React from "react";
import TuitComponent from "../tuits/TuitList";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
  
 return(
  <div>
   <h4> Home</h4>
    <WhatsHappening/>
    <TuitComponent/>
   </div>
 );
};
export default HomeComponent;



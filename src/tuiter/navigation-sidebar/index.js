import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  // gets the pages path
  // {} then the name of a key-value in json creates a new varable using that key-value name
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const activeLabs = paths[2];

 const links =["home","explore","notifications","messages","bookmarks","lists","profile","more"]
  return (
   <div className="list-group">

       {
      links.map(link => {
        const active = pathname.indexOf(link) >= 0 ? 'active' : ''
        return(
     <Link to= {`/tuiter/${link}`} className={`text-capitalize list-group-item ${active}`}>
       {link}
     </Link>
        )
        
}
      )
}
<Link to= {`/labs`}  className={`list-group-item ${activeLabs === 'labs'?'active':''}`}>
       Labs
     </Link>

   </div>
 );
};

export default NavigationSidebar;


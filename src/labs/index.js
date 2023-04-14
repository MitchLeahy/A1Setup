import A6 from './a6';
import Nav from '../nav.js';
import A7 from './a7'
import {Routes, Route} from "react-router";

const Labs = () => {
    return (
    <div>

        <Nav/>
        <Routes>
            <Route index element= {<A6/>}/>
            <Route path = "/a7" element= {<A7/>}/>
        </Routes>
        
    </div>

    );
};
export default Labs;
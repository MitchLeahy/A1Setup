import {Link} from 'react-router-dom'

function Nav () {
    return (
       <div>
        <Link to = "/" >Labs</Link>|
        <Link to = "/" >A6</Link>|
        <Link to ="/a7">A7</Link>|
        <Link to = "/tuiter" >Tuiter</Link>
        
       </div>
    )
    }
export default Nav
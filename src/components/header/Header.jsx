import { Link } from "react-router-dom"
import { Button } from "../"

import "./header.css"

const Header = ({buttonValue, setButtonValue}) => {

    /* 
        About State
            state can be used as <Link to="/" state={{ active: true }}>Home</Link>
            state is passed across different routes
            state is used to persist consistent information across different routes
            state can be accessed by location.state, where const location = useLocation()
            eg: useLocation() imported from "react-router-dom" can be used to get current url
    */

    return (
        <header className="header">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div id='resume_button'>
                <Button value={buttonValue} setValue={setButtonValue} />
            </div>
        </header>
    )
}

export default Header
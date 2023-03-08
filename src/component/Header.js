import { Link } from "react-router-dom"
import Button from "./Button"

const Header = ({buttonValue, setButtonValue}) => {

    // about state
    // state can be used as <Link to="/" state={{ active: true }}>Home</Link>
    // state is passed across different routes
    // state is used to persist consistent information across different routes
    // state can be accessed by location.state, where const location = useLocation()
    // eg: useLocation() imported from "react-router-dom" can be used to get current url

    return (
        <header className="header">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Button value={buttonValue} setValue={setButtonValue} /></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/piano">Piano</Link></li> */}
                {/* <li><Link to="/comedy">Comedy</Link></li> */}
            </ul>
        </header>
    )
}

export default Header
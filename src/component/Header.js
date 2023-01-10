import { Link } from "react-router-dom"
import Button from "./Button"

const Header = ({connected, setConnected}) => {

    // about state
    // state can be used as <Link to="/" state={{ active: true }}>Home</Link>
    // state is passed across different routes
    // state is used to persist consistent information across different routes
    // state can be accessed by location.state, where const location = useLocation()
    // eg: useLocation() imported from "react-router-dom" can be used to get current url

    return (
        <header className="header">
            <ul className="center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Button connected={connected} setConnected={setConnected} /></li>
                <li><Link to="/paper">Paper</Link></li>
                <li><Link to="/quote">Quote</Link></li>
            </ul>
        </header>
    )
}

export default Header
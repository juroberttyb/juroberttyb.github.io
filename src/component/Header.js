import { Link } from "react-router-dom"
import Button from "./Button"

const Header = ({connected, setConnected}) => {

    return (
        <header className="header">
            <ul className="center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Button connected={connected} setConnected={setConnected} /></li>
                <li><Link to="/publication">Publication</Link></li>
                <li><Link to="/quote">Quote</Link></li>
            </ul>
        </header>
    )
}

export default Header
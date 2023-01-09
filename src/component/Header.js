import { Link } from "react-router-dom"

const Header = ({ connected, setConnected }) => {
    const onClick = () => {
        setConnected(
            () => {
                return "Connected"
            }
        )
    }

    return (
        <header className="header">
            <ul className="center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/publication">Publication</Link></li>
                <li><Link to="/quote">Quote</Link></li>
            </ul>
            <ul className="center">
                <li><button className="button connect" onClick={onClick}>{connected}</button></li>
            </ul>
        </header>
    )
}

export default Header
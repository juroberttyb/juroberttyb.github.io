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
        <center>
            <header id="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/publication">Publication</Link></li>
                    <li><Link to="/quote">Quote</Link></li>
                    <li><button className="button primary" id="connect wallet" onClick={onClick}>{connected}</button></li>
                </ul>
            </header>
        </center>
    )
}

export default Header
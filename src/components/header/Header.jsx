import { Link } from "react-router-dom"
// import { Button } from "../"
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

    const resumeOn = () => {
        setButtonValue(() => {
            return "Showing Resume"
        })
    }

    return (
        <header className="header">
            <ul>
                <li><Link to="/">回到首頁</Link></li>
                {/* <li><Link to="/policy">Policy</Link></li> */}
                {/* <li><Link to="/chat">Contact</Link></li> */}
                <li><Link to="/dev"><span onClick={resumeOn}>聯絡我們</span></Link></li>
                {/* <li><a href="mailto: juroberttyb@gmail.com">Email</a></li> */}
                {/* <li><a href="https://twitter.com/zhuboxuan2">Twitter</a></li> */}
                {/* <li><a href="https://www.linkedin.com/in/robert-chu-5b66081a9/">LinkedIn</a></li> */}
                {/* <li><a href="https://github.com/juroberttyb">GitHub</a></li> */}
            </ul>
            {/* <div id='resume_button'>
                <Button value={buttonValue} onClick={resumeOn} />
            </div> */}
        </header>
    )
}

export default Header
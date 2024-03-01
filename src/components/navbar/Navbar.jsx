import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./Navbar.scss"
import { useState } from "react"

const Navbar = () => {

    const [isScorolled, setIsScrolled] = useState(false);

    window.onscroll = ()=> {
        setIsScrolled(window.pageYOffset ===0 ? false : true);
        return () => (window.onscroll = null);
    }

  return (
    <div className={isScorolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>Kids</span>
                <Notifications className="icon"/>
                <img src="https://cdn-icons-png.freepik.com/256/4140/4140048.png" alt="" />
                <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
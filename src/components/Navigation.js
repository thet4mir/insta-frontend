import "../style/navigation.scss"
import logo from "../images/instagramLogo.png"
import searchIcon from "../images/searchIcon.png"
import Menu from "./Menu.js"


const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="logo" />
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <span className="searchText"> search </span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation

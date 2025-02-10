import "./Header.css";
const Header = () => {
    return(
        <header>
            <ul>
                <a className="menu__link active" href="">
                    <li >Home</li>
                </a>
                <a href="">
                    <li>About me</li>
                </a>
                <a href="">
                    <li>Projects</li>
                </a>
                <a href="">
                    <li>Contact</li>
                </a>
            </ul>
        </header>
    );
};

export default Header;
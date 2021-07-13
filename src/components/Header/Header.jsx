import classes from '../componentsForCSS/Header.module.css';
import logo from "../photos/photoForHeader.png";
function Header() {
    return (
    <header className={classes.header}>
        <img id={classes.hat} title="my-img" src={logo} alt="my-img" />
    </header>)
}
export default Header;
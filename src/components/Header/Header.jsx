import classes from './Header.module.css';
import logo from "../../photos/photoForHeader.png";
function Header() {
    return (
    <header className={classes.gridHeader}>
        <img id={classes.hat} title="my-img" src={logo} alt="my-img" />
    </header>)
}
export default Header;
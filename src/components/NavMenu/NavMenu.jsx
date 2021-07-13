import classes from '../componentsForCSS/NavMenu.module.css';

function NavMenu() {
    return (
<nav className={classes.navMenu}>
    <div className={classes.itemMenu}><a>Home</a></div>
    <div className={classes.itemMenu}><a>Photo</a></div>
    <div className={classes.itemMenu}><a>Jobs</a></div>
    <div className={classes.itemMenu}><a>Contacts</a></div>
</nav>)
}
export default NavMenu;
import classes from './NavMenu.module.css';
import {NavLink} from "react-router-dom";

function NavMenu() {
    return (
        <nav className={classes.gridNavMenu}>
            <div className={classes.itemMenu} ><NavLink to={'/profile'}
                                                        activeClassName={classes.active}
                                                        hoverClassName={classes.hover}
            >Home</NavLink></div>
            <div className={classes.itemMenu} ><NavLink to={'/chat'}
                                                        activeClassName={classes.active}
                                                        hoverClassName={classes.hover}
            >Message</NavLink></div>
            <div className={classes.itemMenu}><NavLink to={'/media'}
                                                       activeClassName={classes.active}
                                                       hoverClassName={classes.hover}
            >Media</NavLink></div>
            <div className={classes.itemMenu}><NavLink to={'/settings'}
                                                       activeClassName={classes.active}
                                                       hoverClassName={classes.hover}
            >Settings</NavLink></div>

        </nav>)
}
export default NavMenu;
import classes from './ChatElements.module.css';
import {NavLink} from "react-router-dom";

function SeparateChatItem(itemChat) {
    let pathToChat = '/chat/' + itemChat.uniqueUserId;
    return <div className={classes.separateChat + ' ' + classes.activeSeparateChat}>
        <NavLink to={pathToChat}>{itemChat.name}</NavLink></div>
}

export default SeparateChatItem;
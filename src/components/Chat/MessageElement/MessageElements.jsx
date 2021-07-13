import classes from './Chat.module.css';
import {NavLink} from "react-router-dom";

function MessagesFromSeparateChatItem(itemMessage) {
    return <div className={classes.messagesFromSeparateChat}>{itemMessage.textMessage}</div>
}

export default MessagesFromSeparateChatItem;
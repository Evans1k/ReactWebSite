import classes from './MessageElements.module.css';


function MessagesFromSeparateChatItem(itemMessage) {
    return <div className={classes.messagesFromSeparateChat}>{itemMessage.textMessage}</div>
}

export default MessagesFromSeparateChatItem;
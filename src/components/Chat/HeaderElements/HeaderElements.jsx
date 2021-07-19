import classes from './HeaderElements.module.css';


function HeaderChatForSeparateChat(itemHeader) {
    return <div className={classes.headerChatForSeparateChat}>{itemHeader.nickName}</div>
}

export default HeaderChatForSeparateChat;
import classes from './Chat.module.css';
import {NavLink} from "react-router-dom";

function SeparateChatItem(itemChat) {
    let pathToChat = '/chat/' + itemChat.uniqueUserId;
    return <div className={classes.separateChat + ' ' + classes.activeSeparateChat}>
        <NavLink to={pathToChat}>{itemChat.name}</NavLink></div>
}

function HeaderChatForSeparateChat(itemHeader) {
    return <div className={classes.headerChatForSeparateChat}>{itemHeader.nickName}</div>
}

function MessagesFromSeparateChatItem(itemMessage) {
    return <div className={classes.messagesFromSeparateChat}>{itemMessage.textMessage}</div>
}

function Chat() {
    let chats = [{uniqueUserId: 1, name: "Vasylyna"},
        {uniqueUserId: 2, name: "Igor"},
        {uniqueUserId: 3, name: "Yulik"},
        {uniqueUserId: 4, name: "Volodia"},
        {uniqueUserId: 5, name: "Nazar"},
        {uniqueUserId: 6, name: "Yarik"}
    ]
    let chatElements = chats
        .map(cElement => <SeparateChatItem uniqueUserId={cElement.uniqueUserId} name={cElement.name}/>)

    let headers = [
        {nickName: "VasylynaKorniy"},
        {nickName: "IgorChychman"},
        {nickName: "YulikTstvetkov"},
        {nickName: "VolodiaMladonov"},
        {nickName: "NazarHnatyshun"},
        {nickName: "YarikKryt"}
    ]
    let headerElements = headers
        .map(hElement => <HeaderChatForSeparateChat nickName={hElement.nickName}/>)
    let messages = [
        {uniqueMessageId: 1, textMessage: "Hello my dear friends."},
        {uniqueMessageId: 2, textMessage: "Hello how are you?"},
        {uniqueMessageId: 3, textMessage: "Ok"},
        {uniqueMessageId: 4, textMessage: "Nice."},
        {uniqueMessageId: 5, textMessage: "Maybe"},
        {uniqueMessageId: 6, textMessage: "All right"}
    ]
    let messageElements = messages
        .map(mElement => <MessagesFromSeparateChatItem textMessage={mElement.textMessage}
                                                      uniqueMessageId={mElement.uniqueMessageId}/>)
    return (
        <div className={classes.chatContent}>
            <div className={classes.allChat}>
              {/*<SeparateChatItem uniqueUserId={chats[0].uniqueUserId} name={chats[0].name}/>*/}
              {/*<SeparateChatItem uniqueUserId={"Dimanuch"} name={"Aezakmi"}/>*/}
                {chatElements}
            </div>
            <div className={classes.headerChat}>
                {headerElements}
            </div>
            <div className={classes.messagesFromChat}>

                {messageElements}
            </div>
        </div>
    )
}

export default Chat;
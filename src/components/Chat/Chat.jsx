import classes from './Chat.module.css';
import SeparateChatItem from "./ChatElements/ChatElements";
import HeaderChatForSeparateChat from "./HeaderElements/HeaderElements";
import MessagesFromSeparateChatItem from "./MessageElement/MessageElements";

function Chat(props) {

    let chatElements = props.state.chats
        .map(cElement => <SeparateChatItem uniqueUserId={cElement.uniqueUserId} name={cElement.name}/>)


    let headerElements = props.state.headers
        .map(hElement => <HeaderChatForSeparateChat nickName={hElement.nickName}/>)

    let messageElements = props.state.messages
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
import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let  messagesElement = props.state.messages.map( m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        if (newMessageElement.current.value != '') {
            props.addMessage();
            newMessageElement.current.value = '';
        }
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
            </div>
            <div className={s.containerTextArea}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                <button onClick={ addMessage }>Отправить</button>
            </div>  
        </div>
    );
}

export default Dialogs;
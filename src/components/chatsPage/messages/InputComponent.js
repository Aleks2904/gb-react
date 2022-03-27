import React, {useEffect, useRef, useState} from "react";
import { Input, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './form.module.css';

export const InputComponent = ({chat, list}) =>{
    const [message, setMessage] = useState({
        text: ''
    });

    function setMessageFn(e){
        setMessage( {
            text: e.target.value,
            date: Number(new Date()),
            author: 'User',
        })
    }

    useEffect(()=>{
        let time = null;

        if(chat){
            const text = 'hi, im bot';
            const lastMessage = chat.chat[chat.chat.length - 1];

            if(chat.chat.length > 0 && lastMessage.author !== 'Bot'){
                time = setTimeout(()=>{
                    chat.fnUpdateChat(list,{text, author: 'Bot', date: Number(new Date())})
                },500)
            }
        }

        return () =>{
            clearInterval(time)
        }
    })

    return(
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                if(chat){
                    chat.fnUpdateChat(list,message)
                    setMessage({text: '', date: Number(new Date()), author: 'User'})
                }else{
                    return
                }}}>
            <Input
                className={styles.input}
                value={message.text}
                onInput={setMessageFn}
                type="text"
                autoFocus={true}
                fullWidth={true}
                placeholder="Send message ..."
            />
            {   message.text &&
                <Button
                    className={styles.btn}
                    endIcon={<SendIcon/>}
                    type="submit"
                />
            }
        </form>
    )
};
import React, {useEffect, useState} from "react";
import { Input, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './form.module.css';
import {useSelector} from "react-redux";
import {useParams} from "react-router";

export const InputComponent = () =>{
    const [message, setMessage] = useState({
        text: ''
    });
    const { chats } = useSelector((state) => state)
    const { id } = useParams();
    const chat = chats.filter(el => Number(el.id) === Number(id))[0];

    function setMessageFn(e){
        setMessage( {
            text: e.target.value,
            date: Number(new Date()),
            author: 'User',
        })
    }

    useEffect(()=>{
        let time = null;

        if(chat.chat){
            const text = 'hi, im bot';
            const lastMessage = chat.chat[chat.chat.length - 1];

            if(chat.chat.length > 0 && lastMessage.author !== 'Bot'){
                time = setTimeout(()=>{
                    chat.fnUpdateChat({text, author: 'Bot', date: Number(new Date())}, chats)
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
                    chat.fnUpdateChat(message, chats)
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
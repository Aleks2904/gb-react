import React, {useEffect, useRef, useState} from "react";
import { Input, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './form.module.css';

export const InputComponent = ({setList, list}) =>{
    const [message, setMessage] = useState({
        text: ''
    });

    function setListMessages(e){
        e.preventDefault();
        if(message){
            setList([...list, message])
            setMessage({
                text: '',
                date: '',
                author: '',
            })
        }
    }

    function setMessageFn(e){
        setMessage( {
            text: e.target.value,
            date: new Date(),
            author: 'User',
        })
    }

    useEffect(()=>{
        const text = 'hi, im bot';
        const lastMessage = list[list.length - 1];
        let time = null;

        if(list.length > 0 && lastMessage.text !== text){
            time = setTimeout(()=>{
                setList([...list, {text, author: 'Bot', date: new Date()}])
            },1500)
        }

        return () =>{
            clearInterval(time)
        }
    })

    return(
        <form
            className={styles.form}
            onSubmit={setListMessages}
        >
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
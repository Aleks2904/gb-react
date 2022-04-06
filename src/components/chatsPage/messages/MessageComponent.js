import React, {useEffect, useRef} from "react";
import {useParams} from 'react-router';
import styles from './messageList.module.css';
import cln from 'classnames';
import { useSelector} from "react-redux";

export const MessageComponent = () =>{
     const chatList = useRef('chatList');
    const {chats} = useSelector((state) => state)
    const { id } = useParams();
    const chat = chats.filter(el => Number(el.id) === Number(id))[0];

    useEffect(()=>{
        chatList.current.scrollTo(0, chatList.current.scrollHeight);
    })
    return(
        <ul className={styles.list} ref={chatList}>
            {chat.chat.map(el=>(
                <li
                    key={el.date}
                    className={cln(styles.item, {
                        [`${styles.itemIm}`]: el.author === 'User'
                    })}
                >
                    <p
                        className={styles.text}
                    >
                        {el.text}
                    </p>
                    <p
                        className={styles.date}
                    >
                        date: {new Date(el.date).toLocaleString()}
                    </p>
                </li>
            ))}
        </ul>
    )
};
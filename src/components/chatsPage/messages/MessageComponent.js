import React, {useEffect, useRef} from "react";
import styles from './messageList.module.css';
import cln from 'classnames';

export const MessageComponent = ({list}) =>{
    const chatList = useRef('chatList');
    console.log(list)
    const chat = list.chat ?? [];

    useEffect(()=>{
        chatList.current.scrollTo(0, chatList.current.scrollHeight);
    })
    return(
        <ul className={styles.list} ref={chatList}>
            {chat.map(el=>(
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
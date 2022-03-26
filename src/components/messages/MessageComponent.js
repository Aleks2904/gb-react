import React, {useEffect, useRef} from "react";
import styles from './messageList.module.css';
import cln from 'classnames';

export const MessageComponent = ({list}) =>{
    const chatList = useRef('chatList');

    useEffect(()=>{
        chatList.current.scrollTo(0, 99999);
    })
    return(
        <ul className={styles.list} ref={chatList}>
            {list.map(el=>(
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
                        date: {el.date.toLocaleTimeString()}
                    </p>
                </li>
            ))}
        </ul>
    )
};
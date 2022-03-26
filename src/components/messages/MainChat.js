import React, {useState} from "react";
import {MessageComponent, InputComponent} from './index'
import style from './chat.module.css';

export const MainChat = () => {
    const [list, setList] = useState([]);

    return(
        <div className={style.chat}>
            <MessageComponent list={list}/>
            <InputComponent setList={setList} list={list}/>
        </div>
    )
};
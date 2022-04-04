import React, {useState} from "react";
import {MessageComponent, InputComponent} from './index'
import style from './chat.module.css';

export const MainChat = ({chat, list}) => {
    return(
        <div className={style.chat}>
            <MessageComponent list={chat}/>
            <InputComponent chat={chat} list={list}/>
        </div>
    )
};
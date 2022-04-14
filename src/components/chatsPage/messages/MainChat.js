import {MessageComponent, InputComponent} from './index'
import style from './chat.module.css';

export const MainChat = () => {
    return(
        <div className={style.chat}>
            <MessageComponent/>
            <InputComponent/>
        </div>
    )
};
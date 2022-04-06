import style from "../gloablStyle/globalStyle.css";
import { Chats } from "../components";
import {storeChats} from "../store";
import { Provider } from 'react-redux';

export const PageChats = () => {
    const body = document.querySelector('body');
    body.style = style;

    return (
        <main className="main">
            <Provider store={storeChats} >
                <Chats/>
            </Provider>
        </main>
    );
}
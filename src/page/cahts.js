import style from "../gloablStyle/globalStyle.css";
import { Chats } from "../components";
import { storeChats, persistSoreChat } from "../store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

export const PageChats = () => {
    const body = document.querySelector('body');
    body.style = style;

    return (
        <main className="main">
            <Provider store={storeChats} >
                <PersistGate persistor={persistSoreChat}>
                    <Chats/>
                </PersistGate>
            </Provider>
        </main>
    );
}
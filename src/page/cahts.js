import style from "../gloablStyle/globalStyle.css";
import { Chats } from "../components";

export const PageChats = () => {
    const body = document.querySelector('body');
    body.style = style;

    return (
        <main className="main">
            <Chats/>
        </main>
    );
}
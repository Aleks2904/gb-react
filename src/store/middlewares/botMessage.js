import {ADD_NEW_MESSAGE, changeChat} from "../chats";

export const botMessage = (store) => (next) => (action) => {
    if(action.type === ADD_NEW_MESSAGE ){
        action.payload.forEach(el=>{
            const lengthChat = el.chat.length - 1;
            if(lengthChat > 0 && el.chat[lengthChat].author === "User"){
                setTimeout(()=>{
                    if(lengthChat === el.chat.length - 1){
                        const newChatsList = action.payload.slice();
                        const roomID = el.id;
                        const indexChat = newChatsList.findIndex(el => el.id === roomID);
                        newChatsList[indexChat].chat.push({
                            text: "hello, i'm middleware bot !",
                            date: Number(new Date()),
                            author: 'Bot',
                        })
                        store.dispatch(changeChat(newChatsList))
                    }
                }, 1000)
            }
        })
    }

    return next(action);
}
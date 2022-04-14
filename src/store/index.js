import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import { profileReducer } from "./profile";

import { chatsReducer } from "./chats";
import { botMessage } from "./middlewares";

const persistConfigProfile = {
    key: "MyProfile",
    storage
}

const persistConfigChats = {
    key: 'MyChats',
    storage
}


export const store = createStore(
    persistReducer(persistConfigProfile, profileReducer)
)

export const storeChats = createStore(
    persistReducer( persistConfigChats, chatsReducer),
    compose(
        applyMiddleware(botMessage)
    )
)

export const persistStoreProfile = persistStore(store);
export const persistSoreChat = persistStore(storeChats);
import { createStore } from "redux";

import { profileReducer } from "./profile";

import { chatsReducer } from "./chats";


export const store = createStore(profileReducer)
export const storeChats = createStore(chatsReducer)
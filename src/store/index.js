import { profileReducer } from "./profile";
import { createStore } from "redux";

export const store = createStore(profileReducer)
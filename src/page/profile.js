import { Provider } from "react-redux";
import { store, persistStoreProfile} from "../store";
import {Profile} from '../components'
import { PersistGate } from 'redux-persist/integration/react'

export const ProfilePage = () => {
    return(
        <Provider store={store} >
            <PersistGate persistor={persistStoreProfile}>
                <Profile/>
            </PersistGate>
        </Provider>
    )
}
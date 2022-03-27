import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from "@mui/material/Button";
import {ListItemIcon, ListItemText} from "@material-ui/core";
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';

import {MainChat} from "../messages";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
        height: '100%'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export const Chats = () => {
    const classes = useStyles();
    const [listChats, setListChats] = useState([]);
    const [activeChat, setActiveChat] = useState(null);

     function addChats(){
         const id = Number(new Date());
         const chat = {
             id: id,
             chat: [],
             lastMessage: '',
             fnUpdateChat: (listChats, message) => {
                 console.log(listChats)
                const indexChat = listChats.findIndex(el => el.id === id)
                const chat = listChats[indexChat];
                const newList = listChats.slice();
                newList.splice(indexChat,1);
                chat.chat.push(message);
                chat.lastMessage = message.text;
                newList.unshift(chat);
                setListChats(newList);
             }
         }
         const newListChat = [...listChats ?? []];
         newListChat.push(chat)

         setListChats(newListChat);
    };

    function removeChat(id) {
        const indexRemoveChats = listChats.findIndex(el => el.id === id);
        const newList = listChats.slice();
        newList.splice(indexRemoveChats, 1)
        setListChats(newList);
    };

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    {listChats.length > 0 && <List>
                        {listChats.map((el) => (

                            <ListItem key={el.id}>

                                <Button
                                    onClick={()=>setActiveChat(el)}
                                    startIcon={<ChatIcon style={{cursor: 'pointer'}}/>}
                                />

                                <ListItemText primary={el.lastMessage} />

                                <Button
                                    onClick={()=>removeChat(el.id)}
                                    startIcon={<DeleteIcon style={{cursor: 'pointer'}}/>}
                                />

                            </ListItem>
                        ))}
                    </List>}
                    {listChats.length === 0 &&
                    <p style={{marginTop: '50px'}}>
                        Пусто :(
                    </p>
                    }

                    <Button onClick={addChats}>
                        Добавить чат
                    </Button>
                </div>
            </Drawer>
            <main className={classes.content}>
                {activeChat && <MainChat list={listChats} chat={activeChat}/>}
            </main>
        </div>
    );
}

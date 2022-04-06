import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from "@mui/material/Button";
import { ListItemText } from "@material-ui/core";
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete';

import {MainChat} from "../messages";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import {changeChat} from "../../../store/chats/actions";

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
        padding: '0 24px 0 24px',
    },
}));

export const Chats = () => {
    const {chats} = useSelector((state) => state)
    const dispatch = useDispatch();

    const classes = useStyles();
    const link = useNavigate();

    function addChats(){
         const id = Number(new Date());
         dispatch(changeChat([...chats,{
             id: id,
             chat: [],
             lastMessage: '',
             fnUpdateChat: (message, chats) => {
                 const indexChat = chats.findIndex(el => Number(el.id) === Number(id))
                 const chat = chats[indexChat];
                 const newList = chats.slice();
                 newList.splice(indexChat, 1);
                 chat.chat.push(message);
                 chat.lastMessage = message.text;
                 newList.unshift(chat);
                 dispatch(changeChat(newList))
             }
         }]))
    };

    function removeChat(id) {
        const indexRemoveChats = chats.findIndex(el => el.id === id);
        const newList = chats.slice();
        newList.splice(indexRemoveChats, 1)
        link('/chats')
        dispatch(changeChat(newList));
    };

    function openChat(el){
        link('/chats/'+ el.id);
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
                    {chats.length > 0 && <List>
                        {chats.map((el) => (

                            <ListItem key={el.id}>

                                <Button
                                    onClick={()=>openChat(el)}
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
                    {chats.length === 0 &&
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
                <Routes>
                    <Route path=":id" element={<MainChat/>}/>
                </Routes>
            </main>
        </div>
    );
}

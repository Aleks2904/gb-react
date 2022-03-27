import './App.css';
import style from './gloablStyle/globalStyle.css';
import {BrowserRouter} from "react-router-dom";
import { Route , Routes } from 'react-router';
import { Layout } from './layout';
import { createTheme, ThemeProvider } from "@mui/material";
import { PageChats, HomePage, DevelopPage } from './page';

const theme = createTheme({
    palette:{
        primary:{
            main: '#282c34'
        }
    }
})

function App() {
    const body = document.querySelector('body');
    body.style = style;

      return (
          <div className="App">
              <ThemeProvider theme={theme}>
                  <BrowserRouter>
                      <Layout/>
                      <Routes>
                          <Route path="/" element={<HomePage/>}/>
                          <Route path="/chats/*" element={<PageChats/>}/>
                          <Route path="/developing" element={<DevelopPage/>}/>
                      </Routes>
                  </BrowserRouter>
              </ThemeProvider>
          </div>
      );
}

export default App;

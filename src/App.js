import './App.css';
import { MainChat } from './components';
import style from './gloablStyle/globalStyle.css';

function App() {
    const body = document.querySelector('body');
    body.style = style;

      return (
        <div className="App">
            <header className="header">
                <p> Header </p>
            </header>

            <main className="main">
                <div style={{color:"#FFF", fontWeight:"bold"}}>
                    потом тут будут чаты
                </div>
                <MainChat/>
            </main>
        </div>
      );
}

export default App;

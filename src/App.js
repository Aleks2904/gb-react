import './App.css';
import React, { useState, useEffect } from 'react';

const InputComponent = ({setList, list}) =>{
    const [message, setMessage] = useState('');

    function setListMessages(){
        setList([...list, message])
        setMessage('')
    }
    function setMessageFn(e){
        setMessage( e.target.value)
    }

    useEffect(()=>{
        const text = 'hi, im bot';
        const lastMessage = list[list.length - 1];
        let time = null;

        if(lastMessage !== text && list.length > 0){
            time = setTimeout(()=>{
                setList([...list, text])
            },500)
        }

        return () =>{
            clearInterval(time)
        }
    })

    return(
        <div>
            <input value={message} onInput={setMessageFn} type="text"/>
            <button onClick={setListMessages}>add</button>
        </div>
    )
};

const MessageComponent = ({list}) =>{
    return(
        <div>
            {list.map((el, index)=>(
                <p key={index}>
                    message: {el}
                </p>
            ))}
        </div>
    )
};

const MessageList = () => {
    const [list, setList] = useState([]);

    return(
        <div>
            <InputComponent setList={setList} list={list}/>
            <br/>
            <MessageComponent list={list} />
        </div>
    )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MessageList/>
      </header>
    </div>
  );
}

export default App;

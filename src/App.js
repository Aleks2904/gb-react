import './App.css';
import React, { useState } from 'react';

const InputComponent = () =>{
    const [message, setMessage] = React.useState('');

    function updateMessage(e){
        setMessage(e.target.value)
    }

    return(
        <div>
            <input onInput={updateMessage} type="text"/>
            <MessageComponent value={message}/>
        </div>
    )
}

const MessageComponent = ({value}) =>{
    return(
        <p>
            message: {value}
        </p>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <InputComponent />
      </header>
    </div>
  );
}

export default App;

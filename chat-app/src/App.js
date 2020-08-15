import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = event => {
    event.preventDefault()
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">

        <input value={input}  onChange={event => setInput(event.target.value)}/>
        <button type="submit" onClick={() => sendMessage()}>SEND</button>

      {
        messages.map(messageItem => <p>{messageItem}</p>)
      }
    </div>
  );
}

export default App;

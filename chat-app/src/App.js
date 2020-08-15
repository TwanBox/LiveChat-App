import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './components/Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'piet', text: 'hallo'}]);
  const [username, setUsername] = useState('');

  const sendMessage = event => {
    if (input) {
      setMessages([...messages, {username: username, text: input}]);
      setInput('');
    }
  }

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])


  return (
    <div className="App">
      <h2>Hi {username}!</h2>

    <FormControl>
      <InputLabel>Type something...</InputLabel>
      <Input value={input}  onChange={event => setInput(event.target.value)}/>
      <Button disabled={!input} variant="contained" color="primary" onClick={() => sendMessage()}>SEND</Button>
    </FormControl>

    {
      messages.map(messageItem => (
        <Message 
        username={username} 
        message={messageItem} />
      ))
    }
    </div>
  );
}

export default App;

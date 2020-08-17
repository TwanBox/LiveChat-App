import React, { useState, useEffect } from 'react';
import './App.css';
import { IconButton, FormControl, Input, AppBar, Avatar } from '@material-ui/core';
import Message from './components/Message';
import db from './firebase';
import firebase from 'firebase';
import  FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'piet', message: 'hallo'}]);
  const [username, setUsername] = useState('');

  const sendMessage = event => {

    db.collection( 'messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
      setInput('');
  }

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}))) 
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])


  return (
    <div className="App">
      <AppBar style={{padding: "10px", backgroundColor: '#037969'}} position="static">
        <Avatar style={{color: '#037969', backgroundColor: 'white'}}>{username.substring(0, 1).toUpperCase() || '?'}</Avatar>
      </AppBar>

      <form className="app-form" onSubmit={e => { e.preventDefault(); }}>

        <FormControl className="app-formControl">
          <Input className="app-input" placeholder="Type a message..." value={input}  onChange={event => setInput(event.target.value)}/>
          <IconButton  className="app-iconButton" disabled={!input} variant="contained" color="primary" onClick={() => sendMessage()}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>


    <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message
          key={id}
          username={username} 
          message={message}
          />
        ))
      }
    </FlipMove>

  </div>
  );
}


export default App;

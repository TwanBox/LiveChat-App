import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css'

const Message = ({ message, username }) => {
  const isOwnMessage = username === message.username;
  return (
    <div className={`message-card ${isOwnMessage && `user-message`}`}>
      <Card className={isOwnMessage ? "message-usercard" : "message-guestcard"}>
        <CardContent>
          <Typography
            color="white"
            variant="h5"
            component="h2"
          >
            <strong>{message.username}</strong> : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
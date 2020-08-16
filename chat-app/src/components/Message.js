import React, { forwardRef  } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css'

const Message = forwardRef(({ message, username }, ref) => {
  const isOwnMessage = username === message.username;
  return (
    <div ref={ref} className={`message-card ${isOwnMessage && `user-message`}`}>
      <Card className={isOwnMessage ? "message-usercard" : "message-guestcard"}>
        <CardContent>
          <Typography
            color="white"
            variant="h5"
            component="h2"
          >
            <strong>{!isOwnMessage && `${message.username}: `}</strong>{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
 
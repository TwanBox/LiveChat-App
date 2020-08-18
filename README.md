# Twan's LiveChat-App

![ScreenShot](https://github.com/TwanBox/LiveChat-App/blob/master/chat-app/public/Screenshot%202020-08-18%20at%2018.41.40.png | width=100)

See [Live Site](https://sapient-depot-285005.web.app/)

A cool chat app like WhatsApp but without a phone number.

# Tech stack
  - React 
  - Firebase
  - Material UI / CSS

  

#### Feature ideas for the future:
  - give all the messages a timestamp
  - Allow users to create their own chatrooms and choose in a list of available chatrooms
  - user authentication
  - profile pictures
  - Nice popup on component mount instead of a prompt
  - Let users upload their own background images
  - Allow users to delete messages



> This was my first time using firebase.
> I chose firebase to listen for new messages
> and display them from the database so that i 
> can implement things like user authentication.
> I could make a real time connection using websockets
> but this approach does not support the functionality i wanted.
> Right now this is mocked with a simple prompt on component mount in the App component.
> When a user types in the name he previously used he is "logged in"
and can see his/her own messages send in the past in the color green.


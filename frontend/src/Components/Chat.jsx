import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';
import Game from './Game/Game';


const SM = "system-message";
const UM = "user-message";

const scrollToMyRef = (ref) => {
  const scroll = ref.current.scrollHeight -
    ref.current.clientHeight;
  ref.current.scrollTo(0, scroll);
};

let updateMessages;
export const sendUserMessage = (message) => {
  updateMessages(init => [...init, <Message type={UM} text={message} />]);
}

export const sendSystemMessage = (message) => {
  updateMessages(init => [...init, <Message type={SM} text={message} />]);
}


function Chat() {

  const [Messages, setMessages] = useState([]);
  const chatContainer = React.createRef();//for auto scroll
 

  const inGame = useSelector(state => state.inGameReducer.inGame);

  useEffect(() => {

    setMessages([]);
    updateMessages = setMessages

    return () => updateMessages = null
  }, [])

  useEffect(() => {
    scrollToMyRef(chatContainer);
  }, [chatContainer]);


  const scrollDown = () => {
    scrollToMyRef(chatContainer);
  };
  return (
    <div ref={chatContainer} className='chat'>
      {Messages}
      {inGame && <Game scrollDown={scrollDown}/>}
    </div>
  )
}

export default Chat;

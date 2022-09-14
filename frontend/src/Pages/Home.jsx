import React, { useEffect,useState } from 'react';
import Control from '../Components/Control.jsx';
import Chat from '../Components/Chat.jsx';
import Header from '../Layouts/Header.jsx';
import { sendSystemMessage, sendUserMessage } from '../Components/Chat';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
  const [language, setLanguage] = useState('en');
  const inGame = useSelector(state => state.inGameReducer.inGame);
  const dispatch = useDispatch();

  const changeLanguage = () =>{
    let lang = language === 'en'? 'ru':'en';
    dispatch({ type: "UPDATE_LANGUAGE", payload: lang });
    setLanguage(lang);
    sendSystemMessage(`Change language to - ${lang}`)
  }


  useEffect(() => {
    sendSystemMessage("Type in a little text. Check how many characters per minute you type");
    sendSystemMessage("Start the test when you are ready");
  }, []);

  useEffect(() => {
    if (inGame) {
      sendUserMessage("Start");
    }
  }, [inGame]);


  return (
    <div className='window'>
      <div>
        <Header text="Test typing" func={changeLanguage}/>
        <Chat />
      </div>
      <Control />
    </div>
  )
}

export default Home
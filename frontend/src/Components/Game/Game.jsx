import React, { useEffect, useState } from 'react'
import getText from '../../Utils/api';
import { TestMessage } from '../Message';
import { keyReader } from './keyReader';
import Letter from './Letter';
import { useDispatch, useSelector } from 'react-redux';
import { sendSystemMessage } from '../Chat';
import Interval from './interval';




function Game(props) {
    const [queue, setQueue] = useState([]);
    const [gameText, setGameText] = useState([]);
    const [startTime, setStartTime] = useState(0);
    const [interval, setInterval] = useState();
    const [mistakeCount, setMistakeCount] = useState(0);

    const focusContainer = React.createRef();

    const dispatch = useDispatch();
    const speedReducer = useSelector(state => state.speedReducer.SPM);
    const accuracyReaducer = useSelector(state => state.accuracyReducer.accuracy);
    const languageReducer = useSelector(state => state.languageReducer.language);

    const getTestText = async () => {
        let result = await getText(languageReducer);
        let text = languageReducer === 'en'? result[0]:result;
        spellItOut(text.split(''));

    };

    const spellItOut = (lettersArray) => {
        let lettersClass = [];
        let lettersJSX = [];
        for (let i = 0; i < lettersArray.length; ++i) {
            lettersClass.push(new Letter("wblack", lettersArray[i]));
            lettersJSX.push(lettersClass[i].getCurrentMarkup());
        }

        setQueue(lettersClass);
        setGameText(lettersJSX);
    };


    const keyPressed = (e) => {
        let userKey = keyReader(e);
        cehckAnsw(userKey);
    }

    const cehckAnsw = (userAnsw) => {
        let indexOnText = gameText.length - queue.length;
        let queueIsNotEmpty = queue.length;

        if (queueIsNotEmpty) {
            if (userAnsw === queue[0].letter) {
                rightKey(indexOnText);
                if (!queue.length) endQueue();
            } else if (!(userAnsw === 'not_a_letter')) {
                wrongKey(indexOnText);
            }
        } else {
            endQueue();
        }
    }

    const wrongKey = (indexOnText) => {
        calcAccuracy();
        queue[0].wrong();
        changeStyle(indexOnText, queue[0].getCurrentMarkup());
    }

    const rightKey = (indexOnText) => {
        queue[0].passed();
        changeStyle(indexOnText, queue[0].getCurrentMarkup());
        queue.shift();
        

        if (!startTime) {
            setStartTime(Math.round(Date.now() / 1000));
            setInterval(new Interval());
        }
    }

    const changeStyle = (index, сhanges) => {
        setGameText(existingItems => {
            return [
                ...existingItems.slice(0, index),
                existingItems[index] = сhanges,
                ...existingItems.slice(index + 1),
            ]
        })
    };

    const endQueue = () => {
        sendSystemMessage([`Speed: ${speedReducer}spm`, <br />, `Accuracy: ${accuracyReaducer}%`]);

        dispatch({ type: "UPDATE_SPM", payload: "0" });
        dispatch({ type: "UPDATE_ACC", payload: '100' });
        dispatch({ type: "UPDATE", payload: false });
    }


    const calcAccuracy = () => {
        setMistakeCount((init) => init + 1);
        let acc = (100 - ((mistakeCount * 100) / gameText.length)).toFixed(2);
        dispatch({ type: "UPDATE_ACC", payload: acc });
    };


    const calcSPM = () => {
        let countWritenLetter = gameText.length - queue.length;
        let elapsedTime = Math.round(Date.now() / 1000) - startTime;
        let SPM = Math.round((countWritenLetter / elapsedTime).toFixed(4) * 60);
        dispatch({ type: "UPDATE_SPM", payload: SPM });
    };

    useEffect(() => {
        getTestText();
        focusContainer.current.focus();
    }, []);

    useEffect(() => {
        if (interval) interval.createInterval(calcSPM, 1000);
        if (queue) props.scrollDown();
        return (() => {
            if (interval) interval.clearIntevalId();
            dispatch({ type: "UPDATE_SPM", payload: "0" });
            dispatch({ type: "UPDATE_ACC", payload: '100' });
        });
    }, [interval, queue])

    return (
        <div ref={focusContainer} tabIndex={0} onKeyDown={keyPressed}>
            <TestMessage text={gameText} />
        </div>

    )
}

export default Game
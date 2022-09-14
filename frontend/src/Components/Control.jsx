import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sendUserMessage } from './Chat';


function Control(props) {

    const [isStart, setStart] = useState(false);
    const speedReducer = useSelector(state => state.speedReducer.SPM);
    const accuracyReaducer = useSelector(state => state.accuracyReducer.accuracy);

    const dispatch = useDispatch();
    const startHandler = () => {
        dispatch({ type: "UPDATE", payload: true });
        setStart(true);
    }

    const endtHandler = () => {
        dispatch({ type: "UPDATE", payload: false });
        sendUserMessage('End');
        setStart(false);
    }


    return (
        <div className='control'>
            {!isStart &&
                <button className='control__button' onClick={startHandler}>Start</button>
            }
            {
                isStart &&
                <>
                    <button className='control__button' onClick={endtHandler}>End</button>
                    <div className='control__info'>
                        <div className='control__result'>
                            <div className='control__result-info'>
                                <div className='control__img-speed'></div>
                                Speed
                            </div>
                            {speedReducer} spm
                        </div>
                        <div className='control__result'>
                            <div className='control__result-info'>
                                <div className='control__img-accuracy'></div>
                                Accuracy
                            </div>
                            {accuracyReaducer}%
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Control
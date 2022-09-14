import React from 'react'

export function TestMessage(props) {

    return (
        <div className='chat__message-inner'>
            <div className={`chat__mes-system-message`}>
                <div className={`chat__system-message`}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

function Message(props) {
    return (
        <div className='chat__message-inner'>
            <div className={`chat__mes-${props.type}`}>
                <div className={`chat__${props.type}`}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Message

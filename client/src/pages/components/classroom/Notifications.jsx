import { SocketContext } from '@/SocketContext'
import React, { useContext } from 'react'

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext)
  return (
    <>
    <h1>hello</h1>
    {call && call.isReceivedCall && !callAccepted && (
      <div className='flex justify-center'>
        <h1>{call.name} is Calling:</h1>
        <button onClick={answerCall}>Answer</button>
      </div>
    )}
    </>
  )
}

export default Notifications

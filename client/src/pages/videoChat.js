import React from 'react'
import VideoPlayer from './components/classroom/VideoPlayer'
import Options from './components/classroom/Options'
import Notifications from './components/classroom/Notifications'
import { ContextProvider } from '@/SocketContext'

const videoChat = () => {
  return (
    <ContextProvider>
    <div>
      <h1 className='text-center mt-2 text-xl bg-gray-500 text-white'>Video Classroom</h1>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
    </ContextProvider>
  )
}

export default videoChat

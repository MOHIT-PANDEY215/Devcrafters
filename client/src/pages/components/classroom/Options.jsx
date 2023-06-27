import { SocketContext } from '@/SocketContext'
import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Options = ({children}) => {
  const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')
  return (
    <div className='mx-3'>
      <form onSubmit={(e)=>{e.preventDefault()}} action="" noValidate autoComplete='off' className='grid gap-2 grid-cols-2'>
        <div className='flex flex-col text-center border-slate-700 border-2'>
        <label>Account Info</label>
        <input className='border-2 border-gray-950' type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
        {console.log(me)}
      <CopyToClipboard text={me}>
        <button>Copy</button>
      </CopyToClipboard>
        </div>
        <div className='flex flex-col text-center border-slate-700 border-2'>
        <label htmlFor="">Make a call</label>
        <input className='border-2 border-gray-950' type="text" placeholder='Enter copied id' value={idToCall} onChange={(e)=>setIdToCall(e.target.value)} />
        {
          callAccepted && !callEnded ? (
            <button  onClick={leaveCall}>
              Hang Up
            </button>
          ): (
            <button  onClick={()=> callUser(idToCall)}>
              Call
            </button>
          )
        }
        </div>
      {children}
      </form>
    </div>
  )
}

export default Options

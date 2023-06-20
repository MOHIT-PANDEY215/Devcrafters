import { SocketContext } from '@/SocketContext'
import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Options = ({children}) => {
  const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}} action="" noValidate autoComplete='off' className='grid gap-2 grid-cols-2'>
        <div className='flex flex-col text-center border-slate-700 border-2'>
        <label htmlFor="">Account Info</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        {console.log(me)}
      <CopyToClipboard text={me}>
        <button>copy</button>
      </CopyToClipboard>
        </div>
        <div className='flex flex-col text-center border-slate-700 border-2'>
        <label htmlFor="">Make a call</label>
        <input type="text" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)} />
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

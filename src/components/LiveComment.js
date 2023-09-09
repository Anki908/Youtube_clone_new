import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/ChatSlice'
import { generateName, getMessage } from '../Utils/helper'

const LiveComment = () => {

    const dispatch = useDispatch();
    const [livemessage , setLiveMessage] = useState();

    const chatM = useSelector((store) => store.chat.messages);
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateName(),
                    message: getMessage(),
                })
            );
        } , 1500)

        return  () => clearInterval(timer);
    } , [dispatch])

  return (
    <>
    <div className='border border-black ml-1 p-2 w-full h-[550px] bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse'>
        {
            chatM.map((m , index) => (
                <ChatMessage key = {index} name = {m.name} msg = {m.message}/>
            ))
        }
    </div>
    <form 
    className='w-full p-2 ml-1 border border-black rounded-b-md'
    onSubmit={(e) => {
        e.preventDefault();
        dispatch(
            addMessage({
                name: "Ankit saini",
                message: livemessage,
            })
        )
        setLiveMessage("");
    }}
    >
        <input 
        className='px-2 w-64 border border-black'
        type = "text"
        placeholder='Type your message'
        value = {livemessage}
        onChange={(e) => {setLiveMessage(e.target.value)}}
        ></input>
        <button 
        className='mx-2 px-1 border border-black bg-green-200'
        >Send</button>
    </form>
    </>
  )
}

export default LiveComment

import React, { useState } from 'react'
import "./ChatScreen.css"
import  Avatar from '@material-ui/core/Avatar';
function Chatscreen() {
    const [nput,setNput] = useState('') ;
    const [messages , setMessages] = useState([
        {name:'Ellen' ,
           image:'..' ,
           message:'Whats up'
    } ,
    {name:'Ellen' ,
    image:'..' ,
    message:'Hello , how are you ?'
} ,
{name:'Ellen' ,
image:'..' ,
message:'Hello , how are you ?'
} ,{
    message:'Helooo' ,
} ,
    ]) ;
    const handleSend = e =>{
        e.preventDefault() ;
        setMessages([...messages,{message:nput}]) 
        
    }
    return (
        
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You matchwith ellen on 10/10/21</p>
            {messages.map(message =>(
                message.name ? (<div className='chatScreen__message'>
                <Avatar className='chatScreen__img' src = {message.image}  alt = {message.name}/>
                <p className='chatScreen__text'>{message.message}</p>
            </div>):(
                <div className='chatScreen__message'>
                <p className='chatScreen__textUser'>{message.message}</p>
                </div>
            )
                
            ))}
            <div >
                <form className='chatScreen__input'>
                    <input value={nput} onChange={(e)=>setNput(e.target.value)} type='text' className='chatScreen__inputField' placeholder='Type a message'/>
                    <button onClick = {handleSend} type = "submit" className='input__button'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chatscreen

import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Chat.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import socketIOClient from "socket.io-client"
import { withRouter } from 'react-router-dom'

const ENDPOINT = "http://localhost:4000";

function OpenChatBtn(props) {
    const messageRef = useRef();
    const inputRef = useRef();
    const [openChat, setOpenChat] = useState(false)
    const [onHover, setOnHover] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [openChatContent, setOpenChatContent] = useState(false)

    const socket = socketIOClient(ENDPOINT)
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        if (sessionStorage.getItem('chat-id')) setOpenChatContent(true)
        socket.on('connect', function (data) {
            socket.emit('join', {
                sessionId: sessionStorage.getItem('chat-id'),
                isAdmin: false
            })
            socket.on('sendFirstInfo', (data)=> {
                if (data.length > 0) setChatList(data[0].chatContent)
            })
            socket.on('thread', (data)=> {
                setChatList(data.chatContent)
            })
            socket.on("admin-msg", function(data) {
                alert("checked")
                setChatList(chatList=> [...chatList, data]);
                setTimeout(()=>{
                    messageRef.current.scrollIntoView({ behavior: "smooth" })
                }, 100)
            })
        })
    }, [])

    const handleChange = (event) => {
        setInputValue({...inputValue , [event.target.name]: event.target.value})
    }
    const location = props.history.location.pathname;

    const sendFirstChatOnSubmit = (event) => {
        event.preventDefault()
        setOpenChatContent(true)
        if (!sessionStorage.getItem('chat-id')) {
            sessionStorage.setItem('chat-id', Math.floor(Math.random() * 190000000) + 100000000);
        }
        socket.emit('firstMessage', {
            sessionId: sessionStorage.getItem('chat-id'),
            chatName: inputValue.chatName,
            chatEmail: inputValue.chatEmail,
            chatContent: [
                {
                    text: inputValue.chatContent,
                    time: new Date()
                }
            ]
        })
        setChatList(chatList=> [...chatList, {
            text: inputValue.chatContent,
            time: new Date()
        }])
    }

    const sendChatOnSubmit = (event) => {
        event.preventDefault();
        socket.emit('messageSend', {
            sessionId: sessionStorage.getItem('chat-id'),
            text: inputValue.messageSend,
            time: new Date(),
        });
        setChatList(chatList=> [...chatList, {text: inputValue.messageSend, time: new Date()}])
        setTimeout(()=>{
            messageRef.current.scrollIntoView({ behavior: "smooth" })
        }, 100)
        inputRef.current.value = "";
    }

    return (
        <div 
            className={location === "/admin" || location === "/admin/dashboard" ? "chat-btn displayNone" : "chat-btn"}
            onMouseEnter={()=> { setOnHover(true) }}
            onMouseLeave={()=> { if (openChat) { setOnHover(true) } else setOnHover(false) }}
        >
            <div 
                className={onHover ? "chat-btn-container chat-btn-hover" : "chat-btn-container"}
                onClick={()=>{
                    if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" });
                    if (openChat) { 
                        setOpenChat(false); 
                        setOnHover(false) 
                    } else { 
                        setOpenChat(true); 
                        setOnHover(true) 
                    }
                }}
                >
                <FontAwesomeIcon icon={faComment}/>
                <p>Live Chat</p>
            </div>
            <div className={openChat ? "chat-box hide_chat_box" : "chat-box"}>
                <div className="chat-box-header">
                    Live Chat
                </div>
                { openChatContent === false &&  
                    <div className="chat-box-body">
                        <form onSubmit={sendFirstChatOnSubmit} className={openChat ? "form-chat hide_chat_box_item" : "form-chat"}>
                            <label>Introduce yourself *</label>
                            <input name="chatName" type="text" onChange={handleChange} placeholder="Name" className="intro" required></input>
                            <input name="chatEmail" type="text" onChange={handleChange} placeholder="Email" className="intro" required></input>
                            <label>Message *</label>
                            <textarea name="chatContent" type="textarea" onChange={handleChange} className="message" required></textarea>
                            <button className="btn chat-box-body-btn">Chat</button>
                        </form>
                    </div>
                }
                { (chatList.length > 0 && openChatContent) && 
                    <div className="chat-box-body no-p">
                        <form onSubmit={sendChatOnSubmit} className={openChat ? "form-chat hide_chat_box_item" : "form-chat"}>
                            {/* <div className="chat-box-user flex" style={{background: '#ddd', width:'100%'}}>
                                <label>{chatData.chatName}</label>
                                <label>{chatData.chatTime}</label>
                                <label>{chatData.chatEmail}</label>
                            </div>   */}
                            <div className="flex-col chat-box-list">
                                {
                                    chatList.map((item, index) => {
                                        return (
                                            <div key={index} ref={messageRef} className="chat-list">
                                                {
                                                    item.fromAdmin !== true && 
                                                    <div className="clienttext">
                                                        <p>{item.text}</p>
                                                    </div>
                                                }
                                                {
                                                    item.fromAdmin === true && 
                                                    <div className="admintext">
                                                        <p>{item.text}</p>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>  
                            <div className="flex chat-box-send">
                                <input name="messageSend" type="text" onChange={handleChange} placeholder="Make a message" ref={inputRef}></input>
                                <button className="flex-center sendchat">
                                    <FontAwesomeIcon icon={faPaperPlane}/>
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default withRouter(OpenChatBtn);
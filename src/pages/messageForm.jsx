import { useState } from "react"
import style from "./messageForm.module.css"
import { Input, Button } from '@chakra-ui/react'

export default function MessageForm() {
    
    const [message, setMessage] = useState("");

    const handleOnChangeMessage = (e) => {
        setMessage(e.target.value)   
    }

    const handleMessageSubmit = () => {
        const messages = localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : []

        if(message) {
            messages.push(message)
            localStorage.setItem("messages",JSON.stringify([...messages]))
            // redirect
            setMessage("")
            window.location.href = "/message-list";
        }
    }

    return (<div className={style.messageForm}>
        <label> Message : </label>
        <Input className={style.messageInput} type="text" value={message} onChange={handleOnChangeMessage} />
        <Button color={"blue"} type="submit" value={"Submit"} onClick={handleMessageSubmit}>
            Submit
        </Button>
    
    </div>)
    // <ChildrenComponent setMessage={setMessage}
}
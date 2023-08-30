import { useState, useEffect} from "react"

import { List, ListItem, ListIcon, Divider, Box } from "@chakra-ui/react"

export default function MesssageList() { 

    const [messageList, setMessageList ] = useState([])

    useEffect(() => {
        const messages = localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : []
        setMessageList([...messages])
    },[])

    return (
        <Box borderWidth='1px' borderRadius='lg'>
        <List spacing={3}>
            { messageList.map((item, index) => ( 
            <><Divider /><ListItem key={index} height={30}>
                    <ListIcon color='green.500' />
                    {item}
                </ListItem></>
            ))}
        </List>
        </Box>
    )
}
import { useState, useEffect } from "react"

export default function FilterFruit() { 
    const [searchingText, setSearchingText] = useState("")
    const [fruits, setFruits] = useState([
        "banana",
        "apple",
        "orange",
        "mango"
    ])

    useEffect(() => {

        if(searchingText != '' ) {
            const filterFruits = fruits.filter((item) => {
                return item.includes(searchingText)
            })

            setFruits([...filterFruits])
        } else {
            setFruits([...[
                "banana",
                "apple",
                "orange",
                "mango"
            ]])
        }
        

    },[searchingText])

    return (<div style={{ backgroundColor:'orange', height:200}}>
        <div>
            <label>Search</label>
            <input type='text' value={searchingText} onChange={(e) => {
                setSearchingText(e.target.value)
            }} />
        </div>
        <div>
            <ul style={{ listStyleType:'none'}}>
                {fruits.map((item, index) => {
                    return(<li key={index}>{item}</li>)
                })}
            </ul>
        </div>
    </div>)
}
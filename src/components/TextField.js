import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';

const TextField = ({input, onChange}) => {
    // const [input, setInput] = useState("")
    // const onChange = (e) => {
    //     setInput(e.target.value)
    //     console.log(e.target.value)
    // }
    return (
        <div style={{width: "100%"}}>
            {/* <textarea 
            style={{
                width:"100%"
            }}
                value={input}
                onChange={(e) => onChange(e)}></textarea> */}
            <TextareaAutosize placeholder='Syötä kopioitu taulukko.' minRows={6} style={{width: "100%"}} value={input} onChange={(e) => onChange(e)}></TextareaAutosize>
        </div>
    )
}

export default TextField

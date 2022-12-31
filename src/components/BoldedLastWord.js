import React, { useEffect, useState } from 'react'

function get_last(words) {
    var n = words.split(" ");
    return n[n.length - 1];

}

const BoldedLastWord = ({sentence, idx}) => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")

    useEffect(() => {
        let temp_last = get_last(sentence)
        let len = temp_last.length
        let temp_first = sentence.substring(0, sentence.length - len)
        setFirst(temp_first)
        setLast(temp_last)
    },[sentence])
  return (
    <div>
        {idx === 0 && 
            <p className='Result-p' key={idx}>
                <span>{first}</span><span>{last}</span>
            </p>
        }
        {idx !== 0 &&
            <p className='Result-p' key={idx}>
                <span>{first}</span><span style={{fontWeight: "bold"}}>{last}</span>
            </p>
        }
    </div>
  )
}

export default BoldedLastWord

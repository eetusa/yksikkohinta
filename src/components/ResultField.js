import React, { useEffect } from 'react'
import BoldedLastWord from './BoldedLastWord'

const ResultField = ({data}) => {

    useEffect(()=> {
        console.log(data)
    }, [data])
  return (
    <div>
       
            {data.map((el, index) => {
                return <BoldedLastWord idx={index} sentence={el}></BoldedLastWord>
            })}
        

    </div>
  )
}

export default ResultField

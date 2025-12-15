import React, { useEffect, useState } from 'react'

function Application() {
    const [min,setMin] = useState(0);
    const [sec,setSec] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setSec(sec+1);
            if (sec>4) {
                setMin(min+1);
                setSec(0);
            }
        },1000)
    })
  return (
    <div>{min} : {sec}</div>
  )
}

export default Application
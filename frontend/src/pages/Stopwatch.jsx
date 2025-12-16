import React, { useEffect, useState } from 'react'

function stopwatch (){
    const[sec, setSec] = useState(0);
    const[min, setMin] = useState(0);
    const[hour, setHour] = useState(0);
    const [run, setRun] = useState(false);
    useEffect(()=>{
        if(!run) return;
       const id = setInterval(()=>{
            setSec(sec => {
                if(sec > 0){
                    return sec-1;
                }
                setMin(min =>{
                    if(min > 0){
                        setSec(59);
                        return min-1;
                    }
                    setHour(hour =>{
                       if(hour>0){
                        setMin(59);
                        setSec(59);
                        return hour-1;
                       }
                       return 0;
                    })
                    return 0;
                })
                return 0;
            })
        },100);
        return () => clearInterval(id);
    },[run]);
    return (
        <div className="flex flex-col items-center">
            <input type="number"
             value={hour}
             onChange={(hour) => setHour(Number(hour.target.value))}
            />
            <input type="number"
             value={min}
             onChange={(min) => setMin(Number(min.target.value))}
            />
            <input type="number"
             value={sec}
             onChange={(sec) => setSec(Number(sec.target.value))}
            />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-3xl">
                {hour} : {min} : {sec}
                </div>
                <button onClick={()=>setRun(run=>!run)} className="px-2 py-1 bg-green-400 rounded-lg m-2">
                    {
                        run ? "Stop" : "Start"
                    }
                </button>
            </div>
            </div>
    );
}
export default stopwatch;
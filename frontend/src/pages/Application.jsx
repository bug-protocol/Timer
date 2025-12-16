import { useEffect, useReducer } from "react";

function Application() {
    const [hour, setHour] = useState(0);
    const [min,setMin] = useState(0);
    const [sec,setSec] = useState(0);
    const [ms, setMs] = useState(0);
    const [run, setRun] = useState(false);
    // let [reset, setReset] = useState(false);
    useEffect(()=>{
      if(!run) return;
      const id = setInterval(()=>{

        // for mlSec
          setMs(ms => {
            if(ms==99){

              // for sec
              setSec(sec=>{
                if(sec==59){

                  // for Minutes
                  setMin(min => {
                    if(min == 59){

                      // for Hours
                      setHour(hour => hour+1);
                      return 0;
                    }
                    return min + 1;
                  });
                  return 0;
                }
                return sec+1;
              });
              return 0;
            }
            return ms+1;
          });
      },10);
      return()=>{
        clearInterval(id);
      }
    },[run]);
    const reset = () =>{
      setRun(false);
      setHour(0);
      setMin(0);
      setSec(0);
      setMs(0);
    };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className='text-3xl'>
      {hour} : {min} : {sec} : {ms}
      </div>
      <button onClick = {()=>setRun(run => !run)} className="px-2 py-1 bg-green-400 rounded-lg m-2">
        {
        run ? "Stop" : "Start"
        }
      </button>
      <button onClick = {reset} className="px-2 py-1 bg-blue-400 rounded-lg m-2">
        {
        "Reset"
        }
      </button>
    </div>
  )
}


export default Application;

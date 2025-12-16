import { useEffect, useReducer } from "react";

function reducer(state) {
  let { min, sec, msec } = state;

  msec++;
  if (msec === 100) {
    msec = 0;
    sec++;
  }
  if (sec === 6) {
    sec = 0;
    min++;
  }

  return { min, sec, msec };
}

function Application() {
  const [state, dispatch] = useReducer(reducer, {
    min: 0,
    sec: 0,
    msec: 0
  });

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(); // triggers reducer
    }, 10);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {state.min} : {state.sec} : {state.msec}
    </div>
  );
}

export default Application;

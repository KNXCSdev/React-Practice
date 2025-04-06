import { useEffect, useState } from "react";

export default function TimerReset() {
  const [time, setTime] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  function secondsToHms(d) {
    d = Number(d);

    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return mDisplay + sDisplay;
  }

  function handleClickStart() {
    setIsRunning(true);
  }

  function handleClickStop() {
    setIsRunning(false);
  }

  function handleClickReset() {
    setIsRunning(false);
    setTime(300);
  }

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  return (
    <div className="flex flex-col gap-12">
      <p className="text-center text-4xl text-black">{secondsToHms(time)}</p>
      <div className="flex items-center justify-center gap-8">
        <button
          className="border border-black px-8 py-2 text-3xl text-black"
          onClick={handleClickStart}
        >
          START
        </button>
        <button
          className="border border-black px-8 py-2 text-3xl text-black"
          onClick={handleClickStop}
        >
          STOP
        </button>
        <button
          className="border border-black px-8 py-2 text-3xl text-black"
          onClick={handleClickReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    console.log("useEffect");
  }, []);

  useEffect(() => {
    document.title = "counter: " + time;
    window.localStorage.setItem("time-key-start", time);
  }, [time]);

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
    </>
  );
};

export default Example;

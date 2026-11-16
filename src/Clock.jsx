import { useState, useEffect } from "react";

export default function Clock() {
  // useState
  const [now, setNow] = useState(new Date());

  // useEffect
  useEffect(() => {
    // setInterval
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // clearInterval
    return () => clearInterval(intervalId);
  }, []);

  const tanggal = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const jam = now.toLocaleTimeString("id-ID", { hour12: false });

  return (
    <div className="clock">
      <span className="clock-time">{jam}</span>
      <span className="clock-date">{tanggal}</span>
    </div>
  );
}

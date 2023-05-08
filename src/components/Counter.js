import { useEffect, useState } from "react";

const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;

export default function Counter() {
  let [clockData, setClockData] = useState({
    dd: 0,
    hh: 0,
    mm: 0,
    ss: 0
  });

  useEffect(() => {
    let clockInterval = setInterval(() => {
      const end = new Date("Jul 05, 2022 12:00:00").getTime();
      const current = new Date().getTime();
      const remaining = end - current;

      let dd = Math.floor(remaining / DAY);
      let hh = Math.floor((remaining % DAY) / HOUR);
      let mm = Math.floor((remaining % HOUR) / MIN);
      let ss = Math.floor((remaining % MIN) / SEC);

      setClockData(previous => {
        return {
          dd: String(dd).padStart(2, "0"),
          hh: String(hh).padStart(2, "0"),
          mm: String(mm).padStart(2, "0"),
          ss: String(ss).padStart(2, "0")
        };
      });
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="flex-w flex-c-m cd100 p-b-33">
      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 days">{clockData.dd}</span>
        <span className="s2-txt1">Days</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 hours">{clockData.hh}</span>
        <span className="s2-txt1">Hours</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 minutes">{clockData.mm}</span>
        <span className="s2-txt1">Minutes</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 seconds">{clockData.ss}</span>
        <span className="s2-txt1">Seconds</span>
      </div>
    </div>
  );
}

import dayjs from "dayjs";
import { useState } from "react";
import { useInterval } from "../_action/useInterval";
import Clock from "../../_icon/clock";

export default function Page() {
  const [currentTime, setCurrentTime] = useState<string>();
  useInterval(() => {
    setCurrentTime(dayjs().format("YYYY년 MM월 DD일 HH시 mm분 ss초"));
  }, 1000);

  return (
    <div className="relative h-screen text-white flex flex-col items-center justify-center gap-10">
      <div className="absolute top-20 left-12">
        <span className="text-white font-bold text-6xl">
          Web Software Developer
        </span>
      </div>
      <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
        <img src={"../_image/intro.png"} width={120} height={120} />
      </div>
      <span className="text-white font-bold text-5xl">김 태 호</span>
      <div className="absolute bottom-20 right-10 flex gap-3 items-center">
        <Clock />
        <span className="text-white font-extralight text-2xl">
          현재 시각: {currentTime}
        </span>
      </div>
    </div>
  );
}

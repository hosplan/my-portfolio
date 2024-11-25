import dayjs from "dayjs";
import { useState } from "react";
import { useInterval } from "../_action/useInterval";

export default function Page(){
    const [currentTime, setCurrentTime] = useState<string>();
    useInterval(() => {
        setCurrentTime(dayjs().format("YYYY년 MM월 DD일 HH시 mm분 ss초"));
    },1000);
    
    return (
        <div className="relative bg-black w-screen h-screen text-white flex flex-col items-center justify-center gap-10">
            <div className="absolute top-20 left-12">
                <span className="text-white font-bold text-6xl">Web Software Developer</span>
            </div>
            <div className="w-48 h-48 rounded-full bg-white"></div>
            <span className="text-white font-bold text-5xl">김 태 호</span>
            <div className="absolute bottom-10 right-10">
                <span className="text-white font-light text-2xl">현재 시각: {currentTime}</span>
            </div>
        </div>
    )
}
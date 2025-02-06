import dayjs from "dayjs";
import { memo, useState } from "react";
import { useInterval } from "../_action/useInterval";
import Clock from "../../_icon/clock";

function Page() {
  const [currentTime, setCurrentTime] = useState<string>();
  useInterval(() => {
    setCurrentTime(dayjs().format("YYYY년 MM월 DD일 HH시 mm:ss"));
  }, 1000);

  return (
    <div className="relative md:h-screen pt-10 md:pt-0 text-white flex flex-col items-center justify-between md:justify-center gap-10">
      <div className="md:absolute md:top-20 md:left-12">
        <span className="text-white font-bold text-2xl md:text-6xl">
          Web Software Developer
        </span>
      </div>

      <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
        <img
          src={"https://hosplan.github.io/my-portfolio/img/intro.png"}
          width={120}
          height={120}
        />
      </div>

      <div className="text-white font-bold text-5xl">김 태 호</div>
      <div className="md:absolute md:bottom-20 md:right-10 flex gap-3 items-center">
        <div className="md:block hidden">
          <Clock />
        </div>

        <span className="text-white font-extralight text-xl md:text-2xl">
          현재 시각: <br className="md:hidden block" /> {currentTime}
        </span>
      </div>
    </div>
  );
}

export default memo(Page);

import { Link } from "react-router-dom";
import BeakerIcon from "../_icon/beakerIcon";
import CalendarIcon from "../_icon/calendarIcon";
import CogIcon from "../_icon/cogIcon";
import Monitor from "../_icon/monitor";
export default function BasicInfo({
  basicInfo,
}: {
  basicInfo: { [key: string]: any };
}) {
  return (
    <div className="flex flex-col pt-7 w-full">
      <div className="p-3 border-t-2 border-gray-400 flex justify-start items-center gap-3">
        <div className="min-w-20 md:w-28 text-left font-semibold md:text-xl flex justify-start gap-2 items-center">
          <div className="size-6">
            <CalendarIcon />
          </div>
          기간
        </div>
        <div className="md:text-base text-sm text-start">
          {basicInfo.duringDate}
        </div>
      </div>
      <div className="p-3 border-t-2 border-gray-400 flex justify-start items-center gap-3">
        <div className="min-w-20 md:w-28 text-left font-semibold md:text-xl flex justify-start gap-2 items-center">
          <div className="size-6">
            <BeakerIcon />
          </div>
          개요
        </div>
        <div className="md:text-base text-sm text-start">
          {basicInfo.submit}
        </div>
      </div>
      <div className="p-3 border-gray-400 border-t-2 border-b-2 flex justify-start items-center gap-3">
        <div className="min-w-28 text-left font-semibold md:text-xl flex justify-start gap-2 items-center">
          <div className="size-6">
            <CogIcon />
          </div>
          사용 기술
        </div>
        <div className="flex gap-2 flex-wrap">
          {basicInfo.useTech.map((tech: string, index: number) => (
            <div
              key={`${tech}_${basicInfo.submit}_${index}`}
              className="py-1 px-3 bg-gray-50 rounded-md md:text-base text-sm text-black"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

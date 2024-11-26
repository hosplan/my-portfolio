import BeakerIcon from "../_icon/beakerIcon";
import CalendarIcon from "../_icon/calendarIcon";
import CogIcon from "../_icon/cogIcon";

export default function BasicInfo({ basicInfo }: { basicInfo: any }) {
  return (
    <div className="flex flex-col mt-7 w-full">
      <div className="p-3 border-t-2 border-gray-400 flex justify-start items-center gap-3">
        <div className="w-28 text-left font-semibold text-xl flex justify-start gap-2 items-center">
          <CalendarIcon />
          기간
        </div>
        <div>{basicInfo.duringDate}</div>
      </div>
      <div className="p-3 border-t-2 border-gray-400 flex justify-start items-center gap-3">
        <div className="w-28 text-left font-semibold text-xl flex justify-start gap-2 items-center">
          <BeakerIcon />
          개요
        </div>
        <div>{basicInfo.submit}</div>
      </div>
      <div className="p-3 border-gray-400 border-t-2 border-b-2 flex justify-start items-center gap-3">
        <div className="w-28 text-left font-semibold text-xl flex justify-start gap-2 items-center">
          <CogIcon />
          사용 기술
        </div>
        <div className="flex gap-2">
          {basicInfo.useTech.map((tech: string, index: number) => (
            <div key={`${tech}_${basicInfo.submit}_${index}`}>{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

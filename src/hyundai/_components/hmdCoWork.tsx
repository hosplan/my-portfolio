import BeakerIcon from "./iconComponents/beakerIcon";
import CalendarIcon from "./iconComponents/calendarIcon";
import CogIcon from "./iconComponents/cogIcon";
import CubeIcon from "./iconComponents/cubeIcon";
import GoodThumbIcon from "./iconComponents/goodThumbIcon";
import ProjectIcon from "./iconComponents/projectIcon";
import WorkListIcon from "./iconComponents/workListIcon";
export default function HmdCoWork() {
  return (
    <div className="w-[50%] h-full p-20 flex flex-col items-start">
      <h2 className="flex gap-3 items-center justify-start text-5xl font-bold">
        <ProjectIcon />
        현대미포조선 HMD-CoWork
      </h2>
      <div className="w-full mt-5 text-left text-gray-500 font-light">
        선박 계약에서 부터 설계, 제조 출하까지 모든 업무 프로세스 개선, 중/소형
        맞춤 차세대 개발
      </div>
      <div className="flex flex-col mt-7 w-full">
        <div className="p-3 border-t-2 border-black flex justify-start items-center gap-3">
          <div className="w-28 text-left font-semibold text-xl flex justify-start gap-2 items-center">
            <CalendarIcon />
            기간
          </div>
          <div>2024-11-25 ~ 2024-11-30</div>
        </div>
        <div className="p-3 border-t-2 border-black flex justify-start items-center gap-3">
          <div className="w-28 text-left font-semibold text-xl flex justify-start gap-2 items-center">
            <BeakerIcon />
            개요
          </div>
          <div>현대미포조선 차세대 중/소형 선박건조 시스템</div>
        </div>
        <div className="p-3 border-black border-t-2 border-b-2 flex justify-start items-center gap-3">
          <div className="w-28 text-left font-semibold text-xl flex justify-start gap-2 items-center">
            <CogIcon />
            사용 기술
          </div>
          <div>C#, Oracle, JavaScript</div>
        </div>
      </div>

      <div className="h-[191px] flex flex-col w-full mt-5 border rounded-xl">
        <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
          <WorkListIcon />
          주요 업무
        </div>
        <div className="flex gap-3 px-10 py-5 h-full items-center">
          <ul className="text-left w-[70%] text-gray-400 font-light list-disc">
            <li>
              현대중공업 프로젝트에서 개발한 선박관리, 선박설계, 통합관리를
              기반으로 하여 현대미포조선 맞춤형 개발
            </li>
            <li>현대미포조선의 요구사항에 따른 Spec관리 자체 개발</li>
            <li>
              현대중공업에 먼저 도입되어 사용했던 API 성능적이슈로 인한 모듈
              자체 개발
            </li>
          </ul>
          <div className="w-[30%]">70%</div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-5 border rounded-xl">
        <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
          <GoodThumbIcon />
          프로젝트 효과
        </div>
        <div className="flex gap-3 px-10 py-5 h-full items-center">
          <ul className="text-left text-gray-400 font-light list-disc">
            <li>
              체계적인 프로세스 확립으로 인한 프로젝트 진행 절차 파악 가능
            </li>
            <li>Spec의 데이터화, 버전 관리로 인한 데이터 중복 최소화</li>
            <li>기존의 HiCoWork 보다 10배 빠른 성능</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col w-full mt-5 border rounded-xl">
        <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
          <CubeIcon />
          구조
        </div>
        <div className="flex gap-3 px-10 py-5 h-full items-center hover:shadow-md transition-shadow"></div>
      </div>
    </div>
  );
}

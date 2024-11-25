import BeakerIcon from "./iconComponents/beakerIcon";
import CalendarIcon from "./iconComponents/calendarIcon";
import CogIcon from "./iconComponents/cogIcon";
import CubeIcon from "./iconComponents/cubeIcon";
import GoodThumbIcon from "./iconComponents/goodThumbIcon";
import ProjectIcon from "./iconComponents/projectIcon";
import WorkListIcon from "./iconComponents/workListIcon";
export default function HiCoWork() {
  return (
    <div className="w-[50%] h-full p-20 flex flex-col items-start">
      <h2 className="flex gap-3 items-center justify-start text-5xl font-bold">
        <ProjectIcon />
        현대중공업 Hi-CoWork
      </h2>
      <div className="w-full mt-5 text-left text-gray-500 font-light">
        선박 계약에서 부터 설계, 제조 출하까지 모든 업무 프로세스 개선, 차세대
        개발
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
          <div>현대중공업 차세대 초/대형 선박건조 시스템</div>
        </div>
        <div className="p-3 border-black border-t-2 border-b-2 flex justify-start items-center gap-3">
          <div className="w-28 text-left font-semibold text-xl flex justify-start gap-2 items-center">
            <CogIcon />
            사용 기술
          </div>
          <div>C#, Oracle, Mysql, Java, JavaScript</div>
        </div>
      </div>
      <div className="h-[191px] flex flex-col w-full mt-5 border rounded-xl hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
          <WorkListIcon />
          주요 업무
        </div>
        <div className="flex gap-3 px-10 py-5 h-full items-center">
          <ul className="text-left w-[70%]  text-gray-400 font-light list-disc">
            <li>선박제조, 출하 파트 개발(선박 관리)</li>
            <li>선박 설계에 필요한 Spec 형상 관리 개발(선박설계)</li>
            <li>Spec의 체계적인 인수인계를 위한 HandOver 모듈 개발</li>
            <li>
              API를 통한 사내 타 시스템(지멘스-Polarion, 현대중공업 통합
              인사시스템) 연동 작업
            </li>
          </ul>
          <div className="w-[30%]">70%</div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-5 border rounded-xl hover:shadow-md transition-shadow">
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
            <li>
              Word파일이 아닌 데이터베이스상에 저장되어 데이터를 확장,활용하기
              용이
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col w-full mt-5 border rounded-xl hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
          <CubeIcon />
          구조
        </div>
        <div className="grid grid-rows-5 grid-cols-10 gap-3 px-10 py-5 h-full items-center hover:shadow-md transition-shadow"></div>
      </div>
    </div>
  );
}

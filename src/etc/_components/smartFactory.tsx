import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
export default function SmartFactory() {
  const WORK_LIST = [
    "프로젝트 PM",
    "샌드위치 판넬 제조 시 발생되는 불량 품목 실시간 감지(스마트 카메라 자체개발) 개발",
    "제품, 자재, 생산지시서 관리, QR 코드 연동",
    "Clovine B2B 버전 API 연동 작업",
    "Alibi-Detect를 활용한 불량감지 인공지능 모듈 개발",
  ];

  const EFFECT_LIST = [
    "기존의 수기로 작성되는 모든 작업의 시스템화",
    "BOM도입 및 데이터화를 통한 자재 수량 관리 용이",
    "QR코드를 통한 자재 위치 관리 가능",
    "Word파일이 아닌 데이터베이스상에 저장되어 데이터를 확장, 활용 용이",
  ];

  const BASIC_INFO = {
    duringDate: "2022-03 ~ 2023-03",
    submit: "MES/스마트 팩토리 개발",
    useTech: ["React", "ExpressJS", "Python", "MongoDB"],
  };

  return (
    <div className="z-50 flex-1 h-full p-20 flex flex-col items-start border rounded-xl hover:bg-gray-100 transition-all hover:text-black">
      <Title title={"스마트팩토리"} />
      <SubTitle subTitle={"판넬 제조업 특성 맞춤 MES/스마트 팩토리"} />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto">
        <WorkList workList={WORK_LIST} percent={-1} />
        <Effect title={"프로젝트 효과"} effectList={EFFECT_LIST} />

        <div className="flex flex-col w-full mt-5 border rounded-xl">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 h-full items-center hover:shadow-md transition-shadow">
            HMD데이터베이스,SpecData, HMDCoWork, 인사정보, 프로젝트관리,
            Spec관리, Issue관리
          </div>
        </div>

        <div className="flex flex-col w-full mt-5 border rounded-xl">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            사진
          </div>
          <div className="flex flex-col gap-5 px-10 py-5 h-full items-center hover:shadow-md transition-shadow">
            <div className="flex-1">
              <img src={"../_image/smartFactory_01.jpg"} />
              <br />
              <span className="">스마트 카메라</span>
            </div>
            <div className="flex-1">
              <img src={"../_image/smartFactory_02.jpg"} />
              <br />
              <span className="">PLC 연결</span>
            </div>
            <div className="flex-1 w-full">
              <img src={"../_image/smartFactory_03.jpg"} width={"auto"} />
              <br />
              <span className="">QR코드 연동</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
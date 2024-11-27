import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
export default function DynamicMindmap() {
  const WORK_LIST = [
    "업무외 개인 프로토타입 개발(2022-09 ~ 2022-10)",
    "프로토 타입 개발 이후 성능 및 UI 등의 강점으로 인해 정식 프로젝트 승격",
    "Dynamic MindMap 기획, 설계, 개발",
  ];

  const EFFECT_LIST = [
    "기존의 마인드맵의 현재 구조상 발생되는 성능 이슈, 버그 해결",
    "리뉴얼 작업을 통한 사용자 친화적 화면 제공",
    "d3를 통한 데이터 시각화의 확장 및 가치 확대",
  ];

  const BASIC_INFO = {
    duringDate: "2022-10 ~ 2023-06",
    submit: "신기술을 활용한 마인드맵",
    useTech: ["ExpressJS", "Javscript", "d3"],
  };

  return (
    <div className="z-50 flex-1 h-full p-20 flex flex-col items-start border rounded-xl transition-all">
      <Title title={"Dynamic MindMap"} />
      <SubTitle subTitle={"기존 마인드맵을 대체하는 차세대 마인드맵"} />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full">
        <WorkList workList={WORK_LIST} percent={80} />
        <Effect title={"서비스 개선 효과"} effectList={EFFECT_LIST} />

        <div className="flex flex-col w-full mt-5 border rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 items-center hover:shadow-md transition-shadow">
            <img src={"../_image/contructor/smartFactory.jpg"} width={"auto"} />
          </div>
        </div>
      </div>
    </div>
  );
}

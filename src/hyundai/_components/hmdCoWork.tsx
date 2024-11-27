import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
export default function HmdCoWork() {
  const WORK_LIST = [
    "현대중공업 프로젝트에서 개발한 선박관리, 선박설계, 통합관리를 기반으로 하여 현대미포조선 맞춤형 개발",
    "현대미포조선의 요구사항에 따른 Spec관리 자체 개발",
    "현대중공업에 먼저 도입되어 사용했던 API 성능적이슈로 인한 모듈 자체 개발",
  ];

  const EFFECT_LIST = [
    "체계적인 프로세스 확립으로 인한 프로젝트 진행 절차 파악 가능",
    "Spec의 데이터화, 버전 관리로 인한 데이터 중복 최소화",
    "기존의 HiCoWork 보다 10배 빠른 성능",
  ];

  const BASIC_INFO = {
    duringDate: "2020-02 ~ 2021-03",
    submit: "현대미포조선 차세대 중/소형 선박건조 시스템",
    useTech: ["C#", "Oracle", "Java", "JavaScript"],
  };

  return (
    <div className="z-50 flex-1 h-full p-20 flex flex-col items-start border rounded-xl transition-all">
      <Title title={"현대중공업 HMD-CoWork"} />
      <SubTitle
        subTitle={
          "선박 계약에서 부터 설계, 제조 출하까지 모든 업무 프로세스 개선, 중/소형 맞춤 차세대 개발"
        }
      />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full">
        <WorkList workList={WORK_LIST} percent={40} />
        <Effect title={"프로젝트 효과"} effectList={EFFECT_LIST} />

        <div className="flex flex-col w-full mt-5 border rounded-xl">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 h-full items-center hover:shadow-md transition-shadow">
            <img src={"../_image/contructor/hmdCoWork.jpg"} width={"auto"} />
          </div>
        </div>
      </div>
    </div>
  );
}

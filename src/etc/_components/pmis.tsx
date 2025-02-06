import { memo } from "react";
import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";

function Pmis() {
  const WORK_LIST = [
    "선박제조, 출하 파트 개발(선박 관리)",
    "선박 설계에 필요한 Spec 형상 관리 개발(선박설계)",
    "Spec의 체계적인 인수인계를 위한 HandOver 모듈 개발",
    "API를 통한 사내 타 시스템(지멘스-Polarion, 현대중공업 통합 인사시스템) 연동 작업",
  ];

  const EFFECT_LIST = [
    "해군사관학교 : 해군사관학교에서 요구한 문서 산출에 특화된 커스텀 기능 제공",
    "(주)드림팜 : 스마트팜에서 발생되는 모든 데이터(온도, 습도, 일조량,수확량)을 버전화 하여 체계적인 관리가 가능",
  ];

  const BASIC_INFO = {
    duringDate: "2021-02 ~ 2022-02",
    submit: "프로젝트 통합 정보 관리",
    useTech: [
      "C#",
      "MS SQL SERVER",
      "JavaScript",
      "CSS3",
      "HTML5",
      ".Net",
      "BootStrap",
    ],
  };
  return (
    <div className="z-50 flex-1 w-full p-5 md:p-20 flex flex-col items-start border rounded-xl transition-all md:h-screen">
      <Title title={"PMIS"} />
      <SubTitle
        subTitle={"상기 프로젝트의 노하우로 만든 범용 프로젝트 형상관리 시스템"}
      />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full mt-10">
        <WorkList workList={WORK_LIST} percent={-1} />
        <Effect title={"시스템 도입 기업"} effectList={EFFECT_LIST} />

        <div className="flex flex-col w-full mt-5 border rounded-xl">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 h-full items-center hover:shadow-md transition-shadow">
            <img
              src={
                "https://hosplan.github.io/my-portfolio/img/contructor/pmis.jpg"
              }
              width={"auto"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Pmis);

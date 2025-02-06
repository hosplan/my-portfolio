import { memo } from "react";
import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
function Clovine() {
  const WORK_LIST = [
    "Clovine SAAS 서비스 운영중 발생하는 핵심 개발이슈/오류 트러블 슈팅 및 개선",
    "개발 확장성을 고려한 모듈화 작업 진행",
    "신규 제품 기능 개선 및 개발에 필요한 선행 신 기술 연구",
    "선행 신기술 개발 적용/활용할 수 있는 기타 프로젝트 참여",
  ];

  const EFFECT_LIST = [
    "라이브 서비스 안정화",
    "백엔드에서 비동기 문제로 발생하는 간헐적 버그 제거",
    "전반적인 성능 향샹 및 사용자 친화적 UI를 위한 개선",
  ];

  const BASIC_INFO = {
    duringDate: "2022-03 ~ 2023-10",
    submit: "프로젝트 통합 관리 SAAS 서비스",
    useTech: [
      "ExpressJS",
      "MongoDB",
      "JavaScript",
      "HTML5",
      "CSS3",
      "AWS",
      "NginX",
    ],
  };

  return (
    <div className="z-50 flex-1 w-full p-5 md:p-20 flex flex-col items-start border rounded-xl transition-all md:h-screen">
      <Title title={"클로바인"} />
      <SubTitle
        subTitle={
          "프로젝트를 한눈에 보며 혁신적으로 관리하여 프로젝트 성공을 위한 서비스"
        }
      />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full mt-10">
        <WorkList workList={WORK_LIST} percent={60} />
        <Effect title={"서비스 개선 효과"} effectList={EFFECT_LIST} />

        <div className="flex flex-col w-full mt-5 border rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 items-center hover:shadow-md transition-shadow">
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/contructor/clovine.jpg"
                }
                width={"auto"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Clovine);

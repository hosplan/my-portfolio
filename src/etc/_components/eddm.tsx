import { memo } from "react";
import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
import Monitor from "../../_icon/monitor";
function Eddm() {
  const WORK_LIST = [
    "대우조선 선박 건조에 필요한 설계 작업에 활용되는 API 루트 비교",
    "대우조선 엔지니어링에 등록된 모든 API 이력 추적 및 상태 관리",
    "로드맵 추천 알고리즘(GCN)분석",
    "API 이력 및 상태관리, 대시보드 개발",
  ];

  const EFFECT_LIST = [
    "프로젝트 마다 발생하는 무분별한 API 생성 억제",
    "최적의 API 경로 제공",
    "각 API 별 사용량 확인을 통해 활용성 여부 파악 가능",
  ];

  const BASIC_INFO = {
    duringDate: "2022-02 ~ 2023-02",
    submit: "Enginerring Data Digital Map",
    useTech: ["C#", "MSSQL", "JavaScript"],
  };

  return (
    <div className="z-50 flex-1 h-screen p-20 flex flex-col items-start border rounded-xl transition-all">
      <Title title={"대우조선 EDDM"} />
      <SubTitle subTitle={"최적의 API 루트맵, 통합 추적 / 상태 관리 시스템"} />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full mt-10">
        <WorkList workList={WORK_LIST} percent={-1} />
        <Effect title={"프로젝트 효과"} effectList={EFFECT_LIST} />

        <div className="flex flex-col w-full mt-5 border rounded-xl">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <Monitor />
            실제 화면
          </div>
          <div className="flex gap-10 px-10 py-5 h-full flex-col items-center hover:shadow-md transition-shadow">
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/eddm/eddm_01.jpg"
                }
                width={"auto"}
              />
              <br />
              <span>API 사용량 추적</span>
            </div>
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/eddm/eddm_02.jpg"
                }
                width={"auto"}
              />
              <br />
              <span>대시보드</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Eddm);

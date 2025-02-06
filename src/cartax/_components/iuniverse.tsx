import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
import Monitor from "../../_icon/monitor";
export default function Iuniverse() {
  const WORK_LIST = [
    "개발인원 2명, 디자이너 1명으로 구성",
    "프로젝트 PM",
    "기획, 설계, 개발, 배포 그리고 운영까지 총괄",
  ];

  const EFFECT_LIST = [
    "보드 개념을 투입하여 카테고리 역할을 수행 카테고리별 업무 분류가 가능",
    "각 태스크별 작성할 수 있는 입력폼 제공 및 상태값 제공으로 업무의 진행도 파악 가능",
    "태스크별 공유가 가능하여 공유받은 인원과 협력기능 제공",
  ];

  const BASIC_INFO = {
    duringDate: "2024-02 ~ 2024-04",
    submit: "최신 기술을 활용한 사이드 프로젝트",
    useTech: [
      "NextJS",
      "Java",
      "SpringBoot",
      "PostgreSql",
      "TypeScript",
      "Docker",
      "AWS",
      "NginX",
      "RestAPI",
    ],
  };

  return (
    <div className="z-50 flex-1 w-full p-5 md:p-20 flex flex-col items-start border rounded-xl transition-all md:h-screen">
      <Title title={"IUniverse"} />
      <SubTitle subTitle={"범용적 업무지원 시스템"} />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full mt-10">
        <WorkList workList={WORK_LIST} percent={60} />
        <Effect title={"기대 효과"} effectList={EFFECT_LIST} />
        <div className="flex flex-col w-full mt-5 border rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 items-center hover:shadow-md transition-shadow">
            <img
              src={
                "https://hosplan.github.io/my-portfolio/img/contructor/iuniverse.jpg"
              }
              width={"auto"}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-5 border rounded-xl">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <Monitor />
            실제 화면
          </div>
          <div className="flex gap-10 px-10 py-5 h-full flex-col items-center hover:shadow-md transition-shadow">
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/iuniverse/iuni_01.png"
                }
                width={"auto"}
              />
              <br />
              <span>로그인 페이지</span>
            </div>
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/iuniverse/iuni_02.png"
                }
                width={"auto"}
              />
              <br />
              <span>아바타 관리</span>
            </div>
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/iuniverse/iuni_03.png"
                }
                width={"auto"}
              />
              <br />
              <span>태스크 목록(칸반)</span>
            </div>
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/iuniverse/iuni_04.png"
                }
                width={"auto"}
              />
              <br />
              <span>태스크 상세 수정</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

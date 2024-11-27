import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
import Monitor from "../../_icon/monitor";
export default function Iuniverse() {
  const WORK_LIST = [
    "개발인원 3명, 디자이너 1명으로 구성",
    "프로젝트 PM",
    "기획, 설계, 개발, 배포 그리고 운영까지 총괄",
  ];

  const EFFECT_LIST = [
    "AWS, Docker를 활용한 운영 및 배포",
    "BackEnd와 FrontEnd 분리 개발, 운영",
    "AWS SES를 활용한 이메일 인증",
    "JWT를 활용한 보안인증",
  ];

  const BASIC_INFO = {
    duringDate: "2024-02 ~ 2024-04",
    submit: "최신 기술을 활용한 사이드 프로젝트",
    useTech: [
      "NextJS",
      "Java(SpringBoot)",
      "PostgreSql",
      "TypeScript",
      "Docker",
    ],
  };

  return (
    <div className="z-50 flex-1 h-full p-20 flex flex-col items-start border rounded-xltransition-all">
      <Title title={"IUniverse"} />
      <SubTitle subTitle={"범용적 업무지원 시스템"} />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full">
        <WorkList workList={WORK_LIST} percent={60} />
        <Effect title={"그 외 사용"} effectList={EFFECT_LIST} />
        <div className="flex flex-col w-full mt-5 border rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 items-center hover:shadow-md transition-shadow">
            <img src={"../_image/contructor/iuniverse.jpg"} width={"auto"} />
          </div>
        </div>
        <div className="flex flex-col w-full mt-5 border rounded-xl">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <Monitor />
            실제 화면
            <a
              href="https://iuniverse.me"
              target="_blank"
              className="text-blue-600 ml-auto"
            >
              iUniverse 홈페이지 가기
            </a>
          </div>
          <div className="flex gap-10 px-10 py-5 h-full flex-col items-center hover:shadow-md transition-shadow">
            <div className="m-auto">
              <img src={"../_image/iuniverse/iuni_01.png"} width={"auto"} />
              <br />
              <span>로그인 페이지</span>
            </div>
            <div className="m-auto">
              <img src={"../_image/iuniverse/iuni_02.png"} width={"auto"} />
              <br />
              <span>아바타 관리</span>
            </div>
            <div className="m-auto">
              <img src={"../_image/iuniverse/iuni_03.png"} width={"auto"} />
              <br />
              <span>태스크 목록(칸반)</span>
            </div>
            <div className="m-auto">
              <img src={"../_image/iuniverse/iuni_04.png"} width={"auto"} />
              <br />
              <span>태스크 상세 수정</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
export default function HiCoWork() {
  const WORK_LIST = [
    "선박제조, 출하 파트 개발(선박 관리)",
    "선박 설계에 필요한 Spec 형상 관리 개발(선박설계)",
    "Spec의 체계적인 인수인계를 위한 HandOver 모듈 개발",
    "API를 통한 사내 타 시스템(지멘스-Polarion, 현대중공업 통합 인사시스템) 연동 작업",
  ];

  const EFFECT_LIST = [
    "체계적인 프로세스 확립으로 인한 프로젝트 진행 절차 파악 가능",
    "Spec의 데이터화, 버전 관리로 인한 데이터 중복 최소화",
    "Word파일이 아닌 데이터베이스상에 저장되어 데이터를 확장, 활용 용이",
  ];

  const BASIC_INFO = {
    duringDate: "2019-02 ~ 2020-02",
    submit: "현대중공업 차세대 초/대형 선박건조 시스템",
    useTech: ["C#", "Oracle", "Mysql", "Java", "JavaScript"],
  };

  return (
    <div className="z-50 flex-1 h-screen p-20 flex flex-col items-start border rounded-xl transition-all">
      <Title title={"현대중공업 Hi-CoWork"} />
      <SubTitle
        subTitle={
          "선박 계약에서 부터 설계, 제조 출하까지 모든 업무 프로세스 개선, 차세대 개발"
        }
      />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full mt-10">
        <WorkList workList={WORK_LIST} percent={40} />
        <Effect title={"프로젝트 효과"} effectList={EFFECT_LIST} />

        <div className="flex flex-col w-full border rounded-xl mt-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 items-center hover:shadow-md transition-shadow">
            <img
              src={
                "https://hosplan.github.io/my-portfolio/img/contructor/hiCoWork.jpg"
              }
              width={"auto"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

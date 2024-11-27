import dayjs from "dayjs";
import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
import Monitor from "../../_icon/monitor";

export default function Cartax() {
  const WORK_LIST = [
    "CataxBiz 구버전에서 신버전으로 리뉴얼 작업",
    "차량, 사용자, 운행 파트의 성능 개선을 위한 코드 리펙터링 진행",
    "SaaS 서비스 운영중 발생하는 오류 트러블 슈팅/성능 개선",
    "신규 제품 기능 개선 및 개발에 필요한 선행 신 기술 연구",
    "개발 확장성을 고혀한 모듈화 작업 진행",
  ];

  const EFFECT_LIST = [
    "라이브 서비스 안정화",
    "전반적인 성능 향샹 및 사용자 친화적 UI를 위한 개선",
  ];

  const BASIC_INFO = {
    duringDate: `2024-06 ~ ${dayjs().format("YYYY-MM-DD")}`,
    submit: "법인차량 운행일지 자동 생성 서비스",
    useTech: ["ExpressJS", "MongoDB", "JavaScript"],
  };

  return (
    <div className="z-50 flex-1 h-full p-20 flex flex-col items-start border rounded-xl transition-all">
      <Title title={"CarTax Biz"} />
      <SubTitle
        subTitle={
          "법인차량 운행일지 자동화, 비용 처리, 실시간 관제 등 통합 솔루션"
        }
      />
      <BasicInfo basicInfo={BASIC_INFO} />
      <div className="flex flex-col overflow-y-auto w-full">
        <WorkList workList={WORK_LIST} percent={60} />
        <Effect title={"서비스 개선 효과"} effectList={EFFECT_LIST} />

        <div className="flex flex-col w-full mt-5 border rounded-xl hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <CubeIcon />
            구조
          </div>
          <div className="flex gap-3 px-10 py-5 items-center hover:shadow-md transition-shadow">
            <img
              src="https://hosplan.github.io/my-portfolio/_image/contructor/cartax.jpg"
              width={"auto"}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-5 border rounded-xl">
          <div className="flex items-center gap-2 text-left text-lg font-semibold border-b py-3 px-6">
            <Monitor />
            실제 화면
            <a
              href="https://admin.cartax.biz"
              target="_blank"
              className="text-blue-600 ml-auto"
            >
              카택스 홈페이지 가기
            </a>
          </div>
          <div className="flex gap-10 px-10 py-5 h-full flex-col items-center hover:shadow-md transition-shadow">
            <div className="m-auto">
              <img src={"./_image/cartax/cartax_01.png"} width={"auto"} />
              <br />
              <span>대시보드</span>
            </div>
            <div className="m-auto">
              <img src={"../_image/cartax/cartax_02.png"} width={"auto"} />
              <br />
              <span>차량 관리</span>
            </div>
            <div className="m-auto">
              <img src={"../_image/cartax/cartax_03.png"} width={"auto"} />
              <br />
              <span>차량 상세정보</span>
            </div>
            <div className="m-auto">
              <img src={"../_image/cartax/cartax_04.png"} width={"auto"} />
              <br />
              <span>사용자 정보</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

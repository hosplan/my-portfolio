import { memo } from "react";
import BasicInfo from "../../_components/basicInfo";
import Effect from "../../_components/effect";
import SubTitle from "../../_components/subTitle";
import Title from "../../_components/title";
import WorkList from "../../_components/workList";
import CubeIcon from "../../_icon/cubeIcon";
import dayjs from "dayjs";
function KeyboardHint() {
  const WORK_LIST = [
    "SaaS 서비스 운영을 위한 인프라 구축(AWS, Docker 활용)",
    "FrontEnd(NextJS), BackEnd(ExpressJS) 개발",
    "가격대비 성능과 디자인이 뛰어난 키보드 탐색",
    "메타태그, 구글,네이버 서치 작업 -> 구글 검색창에 키보드 힌트 검색",
  ];

  const EFFECT_LIST = [
    "기계식 키보드를 잘 모르는 사용자에게 부담없는 설문을 통해 적절한 키보드 추천",
  ];

  const BASIC_INFO = {
    duringDate: `2025-01-31 ~ ${dayjs().format("YYYY-MM-DD")}(진행중)`,
    submit:
      "키보드를 구매하고자 하는 사용자에게 5가지 설문을 통해 키보드 추천 서비스",
    useTech: [
      "ExpressJS",
      "MongoDB",
      "JavaScript",
      "HTML5",
      "CSS3",
      "AWS",
      "NginX",
    ],
    url: "https://keyboardHint.com",
  };

  return (
    <div className="z-50 flex-1 p-20 flex flex-col items-start border rounded-xl transition-all h-screen">
      <Title title={"KeyboardHint"} />
      <SubTitle subTitle={"내가 원하는 키보드 쉽게 찾기"} />
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
                  "https://hosplan.github.io/my-portfolio/img/keyboardhint/banner.jpg"
                }
                width={"auto"}
              />
            </div>
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/keyboardhint/question.jpg"
                }
                width={"auto"}
              />
            </div>
            <div className="m-auto">
              <img
                src={
                  "https://hosplan.github.io/my-portfolio/img/keyboardhint/answer.jpg"
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

export default memo(KeyboardHint);

export default function Page() {
  return (
    <div className="relative md:h-screen text-white flex flex-col items-center justify-center gap-10 md:pt-0 pt-10">
      <div className="md:absolute top-20 left-12 flex flex-col gap-2 items-start">
        <span className="text-white font-bold text-2xl md:text-6xl">
          포트폴리오에 사용한 기술들
        </span>
        <br className="hidden md:block" />
        <ul className="list-disc text-left md:text-xl">
          <li>React 18.3.1v</li>
          <li>TypeScript 4.9.5v</li>
          <li>Tailwind</li>
          <li>Heroicon</li>
          <li>scss</li>
          <li>flaticon</li>
        </ul>
      </div>
      <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
        <img
          src={"https://hosplan.github.io/my-portfolio/img/fin.png"}
          width={120}
          height={120}
        />
      </div>
      <span className="text-white font-bold text-5xl">Fin</span>
      <div className="md:absolute bottom-10 right-10 flex flex-col gap-2 md:pt-0 md:pb-0 pt-5 pb-5">
        <span className="text-white font-light md:text-2xl text-left">
          email: xogh1994@naver.com
        </span>

        <span className="text-white font-light md:text-2xl text-left">
          phone: 010-2827-0682
        </span>

        <a
          href="https://github.com/hosplan"
          target="_blank"
          className="text-blue-500 font-light md:text-2xl text-left"
        >
          https://github.com/hosplan
        </a>
      </div>
    </div>
  );
}

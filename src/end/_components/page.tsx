export default function Page() {
  return (
    <div className="relative h-screen text-white flex flex-col items-center justify-center gap-10">
      <div className="absolute top-20 left-12 flex flex-col gap-2 items-start">
        <span className="text-white font-bold text-6xl">Use By</span>
        <br />
        <ul className="list-disc text-left text-xl">
          <li>React 18.3.1v</li>
          <li>TypeScript 4.9.5v</li>
          <li>Tailwind</li>
          <li>Heroicon</li>
          <li>scss</li>
          <li>flaticon</li>
        </ul>
      </div>
      <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
        <img src={"../_image/fin.png"} width={120} height={120} />
      </div>
      <span className="text-white font-bold text-5xl">Fin</span>
      <div className="absolute bottom-10 right-10 flex flex-col gap-2">
        <span className="text-white font-light text-2xl text-left">
          email: xogh1994@naver.com
        </span>

        <span className="text-white font-light text-2xl text-left">
          phone: 010-2827-0682
        </span>
      </div>
    </div>
  );
}

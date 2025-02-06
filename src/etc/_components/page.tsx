import Eddm from "./eddm";
import Pmis from "./pmis";
import SmartFactory from "../../clovine/_components/smartFactory";

export default function Page() {
  return (
    <div className="">
      <div className="flex w-full h-full flex-col md:flex-row gap-5 p-10 flex-wrap">
        <Pmis />
        <Eddm />
      </div>
    </div>
  );
}

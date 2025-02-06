import Eddm from "./eddm";
import Pmis from "./pmis";
import SmartFactory from "../../clovine/_components/smartFactory";

export default function Page() {
  return (
    <div className="flex w-full h-full gap-5 md:p-10 pt-10 md:pt-0 flex-wrap">
      <Pmis />
      <Eddm />
    </div>
  );
}

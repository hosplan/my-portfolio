import Eddm from "./eddm";
import Pmis from "./pmis";
import SmartFactory from "./smartFactory";

export default function Page() {
  return (
    <div className="">
      <div className="flex w-full h-full gap-5 p-10 flex-wrap">
        <Pmis />
        {/* <Eddm /> */}
        <SmartFactory />
      </div>
    </div>
  );
}

import Eddm from "./eddm";
import Pmis from "./pmis";
import SmartFactory from "./smartFactory";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="flex w-full h-full gap-5 p-10">
        <Pmis />
        <Eddm />
        <SmartFactory />
      </div>
    </div>
  );
}

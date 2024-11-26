import Eddm from "./eddm";
import Pmis from "./pmis";
import SmartFactory from "./smartFactory";

export default function Page() {
  return (
    <div className="h-screen mt-5">
      <div className="flex w-full h-full gap-5">
        <Pmis />
        <Eddm />
        <SmartFactory />
      </div>
    </div>
  );
}

import Clovine from "./clovine";
import SmartFactory from "./smartFactory";

export default function Page() {
  return (
    <div className="flex w-full h-full gap-5 p-10 flex-wrap">
      <Clovine />
      <SmartFactory />
    </div>
  );
}

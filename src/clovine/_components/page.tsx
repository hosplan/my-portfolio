import Clovine from "./clovine";
import DynamicMindmap from "./dynamicMindmap";

export default function Page() {
  return (
    <div className="">
      <div className="flex w-full h-full flex-col md:flex-row gap-5 p-10 flex-wrap">
        <Clovine />
        <DynamicMindmap />
      </div>
    </div>
  );
}

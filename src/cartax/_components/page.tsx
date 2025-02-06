import DynamicMindmap from "./dynamicMindmap";
import Iuniverse from "./iuniverse";

export default function Page() {
  return (
    <div className="">
      <div className="flex w-full h-full flex-col md:flex-row gap-5 p-10 flex-wrap">
        <Iuniverse />
        <DynamicMindmap />
      </div>
    </div>
  );
}

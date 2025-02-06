import DynamicMindmap from "./dynamicMindmap";
import Iuniverse from "./iuniverse";

export default function Page() {
  return (
    <div className="flex w-full h-full gap-5 md:p-10 pt-10 md:pt-0 flex-wrap">
      <Iuniverse />
      <DynamicMindmap />
    </div>
  );
}

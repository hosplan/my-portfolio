import Clovine from "./clovine";
import DynamicMindmap from "./dynamicMindmap";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="flex w-full h-full gap-5 p-10">
        <Clovine />
        <DynamicMindmap />
      </div>
    </div>
  );
}

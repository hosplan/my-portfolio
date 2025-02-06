import HiCoWork from "./hiCoWork";
import HmdCoWork from "./hmdCoWork";

export default function Page() {
  return (
    <div className="flex w-full h-full gap-5 p-10 flex-wrap">
      <HiCoWork />
      <HmdCoWork />
    </div>
  );
}

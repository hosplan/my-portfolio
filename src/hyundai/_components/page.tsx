import HiCoWork from "./hiCoWork";
import HmdCoWork from "./hmdCoWork";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="flex w-full h-full gap-5 mt-10">
        <HiCoWork />
        <HmdCoWork />
      </div>
    </div>
  );
}

import HiCoWork from "./hiCoWork";
import HmdCoWork from "./hmdCoWork";

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <div className="flex w-full h-full">
        <HiCoWork />
        <HmdCoWork />
      </div>
    </div>
  );
}

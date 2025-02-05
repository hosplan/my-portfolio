import HiCoWork from "./hiCoWork";
import HmdCoWork from "./hmdCoWork";

export default function Page() {
  return (
    <div className="">
      <div className="flex w-full h-full flex-col md:flex-row gap-5 p-10 flex-wrap">
        <HiCoWork />
        <HmdCoWork />
      </div>
    </div>
  );
}

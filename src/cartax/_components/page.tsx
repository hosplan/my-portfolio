import Cartax from "./cartax";
import Iuniverse from "./iuniverse";

export default function Page() {
  return (
    <div className="">
      <div className="flex w-full h-full gap-5 p-10 flex-wrap">
        <Iuniverse />
        <Cartax />
      </div>
    </div>
  );
}

import Cartax from "./cartax";
import Iuniverse from "./iuniverse";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="flex w-full h-full gap-5 mt-5">
        <Iuniverse />
        <Cartax />
      </div>
    </div>
  );
}

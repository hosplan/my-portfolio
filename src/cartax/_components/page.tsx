import Cartax from "./cartax";
import Iuniverse from "./iuniverse";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="flex w-full h-full gap-5 p-10">
        <Iuniverse />
        <Cartax />
      </div>
    </div>
  );
}

import Keyboardhint from "./keyboardhint";
import Cartax from "./cartax";
export default function Page() {
  return (
    <div className="flex w-full h-full gap-5 p-10 flex-wrap">
      <Cartax />
      <Keyboardhint />
    </div>
  );
}

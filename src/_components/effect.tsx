import GoodThumbIcon from "../_icon/goodThumbIcon";
export default function Effect({
  title,
  effectList,
}: {
  title: string;
  effectList: string[];
}) {
  return (
    <div className="flex flex-col w-full mt-5 border border-gray-400 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-left text-lg font-semibold border-gray-400 border-b py-3 px-6">
        <GoodThumbIcon />
        {title}
      </div>
      <div className="flex gap-3 px-10 py-5 h-full items-center">
        <ul className="text-left text-gray-400 font-light list-disc">
          {effectList.map((effect: string, index: number) => (
            <li key={`${effect}_${index}`}>{effect}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

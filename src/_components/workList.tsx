import WorkListIcon from "../_icon/workListIcon";
export default function WorkList({
  workList,
  percent,
}: {
  workList: string[];
  percent: number;
}) {
  return (
    <div className="flex flex-col w-full border border-gray-400 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-left text-lg font-semibold border-gray-400 border-b py-3 px-6">
        <WorkListIcon />
        주요 업무
      </div>
      <div className="flex gap-3 px-10 py-5 items-center">
        <ul
          className={
            percent === -1
              ? `w-[100%] text-left  text-gray-400 font-light list-disc`
              : `w-[100%] text-left  text-gray-400 font-light list-disc`
          }
        >
          {workList.map((work: string, index: number) => (
            <li key={`${work}_${index}`}>{work}</li>
          ))}
        </ul>
        {/* {percent !== -1 && <div className="w-[30%]">{percent}</div>} */}
      </div>
    </div>
  );
}

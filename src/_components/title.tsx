import ProjectIcon from "../_icon/projectIcon";
export default function Title({ title }: { title: string }) {
  return (
    <h2 className="flex gap-3 items-center justify-start text-xl md:text-5xl font-bold">
      <div className="md:size-12 size-5">
        <ProjectIcon />
      </div>
      {title}
    </h2>
  );
}

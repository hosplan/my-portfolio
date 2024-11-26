import ProjectIcon from "../_icon/projectIcon";
export default function Title({ title }: { title: string }) {
  return (
    <h2 className="flex gap-3 items-center justify-start text-5xl font-bold">
      <ProjectIcon />
      {title}
    </h2>
  );
}

import { ProjectType } from "@/interfaces/portfolio/project";
import { Image } from "@nextui-org/react";

interface Props {
  data: ProjectType;
}

export default function BodyProjects({ data }: Props) {
  return (
    <div className="">
      <Image alt={data.title} src={data.src} width={600} isZoomed />
    </div>
  );
}

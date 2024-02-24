import { CustomImage } from "@/components/custom/CustomImage";
import { ProjectType } from "@/interfaces/portfolio/project";

interface Props {
  data: ProjectType;
}

export default function BodyProjects({ data }: Props) {
  return (
    <>
      <div className="">
        <CustomImage
          alt={data.title}
          src={data.src}
          height={600}
          width={450}
          isZoomed
        />
      </div>
    </>
  );
}

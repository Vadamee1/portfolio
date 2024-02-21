import { CustomeImage } from "@/components/custom/CustomeImage";
import { ProjectType } from "@/interfaces/portfolio/project";

interface Props {
  data: ProjectType
}

export default function BodyProjects ({data}: Props) {

  return (
    <>
      <div className="">
        <CustomeImage 
          alt={data.title}
          src={data.src}
          height={600}
          width={450}
          isZoomed
        />
      </div>
    </>
  )
}

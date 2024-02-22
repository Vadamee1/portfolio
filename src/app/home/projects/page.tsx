import { CustomeCard } from "@/components/custom/CustomeCard";
import BodyProjects from "@/components/page/projects/BodyProjects";
import FooterProjects from "@/components/page/projects/FooterProjects";
import { PROJECTS } from "@/constants/project/projects";

export default function ProjectsPage () {

  return (
    <>
      <div className="">
        {PROJECTS.map((project) => (
          <CustomeCard
            key={project.key}
            body={<BodyProjects data={project}/>}
            footer={<FooterProjects/>}
            isBlurred
          />
        ))}
      </div>
    </>
  )
}

import { CustomCard } from "@/components/custom/CustomCard";
import BodyProjects from "@/components/page/projects/BodyProjects";
import FooterProjects from "@/components/page/projects/FooterProjects";
import { PROJECTS } from "@/constants/project/projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="">
        {PROJECTS.map((project) => (
          <CustomCard
            key={project.key}
            body={<BodyProjects data={project} />}
            footer={<FooterProjects />}
            isBlurred
          />
        ))}
      </div>
    </>
  );
}

import { Card, CardBody, Image } from "@nextui-org/react";
import FooterProjects from "./FooterProjects";
import { PROJECTS } from "@/constants/project/projects";

export default function Projects() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {PROJECTS.map((project) => (
        <Card key={project.key} isBlurred className="flex flex-col ">
          <Image alt={project.title} src={project.src} width={600} isZoomed />
          <CardBody>
            <FooterProjects projectName={project.title} href={project.href} />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

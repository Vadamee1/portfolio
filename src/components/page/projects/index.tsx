import { Card, CardBody, Image } from "@nextui-org/react";
import FooterProjects from "./FooterProjects";
import { PROJECTS } from "@/constants/project/projects";

export default function Projects() {
  return (
    <Card isBlurred className="flex flex-col ">
      <Image alt={PROJECTS.title} src={PROJECTS.src} width={600} isZoomed />
      <CardBody>
        <FooterProjects projectName={PROJECTS.title} href={PROJECTS.href} />
      </CardBody>
    </Card>
  );
}

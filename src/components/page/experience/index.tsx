import { Card, CardBody } from "@nextui-org/react";
import SchoolExperience from "./School";
import WorkExperience from "./Work";

export default function Experience() {
  return (
    <Card isBlurred className="">
      <CardBody className="flex gap-5">
        <SchoolExperience />
        <WorkExperience />
      </CardBody>
    </Card>
  );
}

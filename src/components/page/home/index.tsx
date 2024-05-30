import { Card, CardBody, CardFooter } from "@nextui-org/react";
import CardImage from "./CardImage";
import BasicInfo from "./BasicInfo";
import ProfileButtons from "./ProfileButtons";
import Welcome from "./Welcome";

export default function CardData() {
  return (
    <div className="flex min-h-svh w-screen items-center justify-center gap-10">
      <Card isBlurred>
        <CardBody>
          <CardImage />
          <BasicInfo />
        </CardBody>
        <CardFooter className="flex justify-center">
          <ProfileButtons />
        </CardFooter>
      </Card>
      <Welcome />
    </div>
  );
}

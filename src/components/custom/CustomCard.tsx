import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
} from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  isBlurred?: boolean;
  isPressable?: boolean;
}

export const CustomCard = ({
  header,
  body,
  footer,
  isBlurred,
  isPressable,
}: Props) => {
  return (
    <Card
      isBlurred={isBlurred ? isBlurred : false}
      isPressable={isPressable ? isPressable : false}
    >
      {header ? <CardHeader>{header}</CardHeader> : ""}
      {body ? <CardBody className="flex justify-center">{body}</CardBody> : ""}
      {footer ? (
        <CardFooter className="flex justify-center">{footer}</CardFooter>
      ) : (
        ""
      )}
    </Card>
  );
};

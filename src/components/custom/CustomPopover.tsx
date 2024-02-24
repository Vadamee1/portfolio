import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  trigger: ReactNode;
  content: ReactNode;
  color: "warning" | "default";
  backdrop?: "blur";
}

export const CustomPopover = ({ trigger, content, color, backdrop }: Props) => {
  return (
    <Popover placement="right" color={color} backdrop={backdrop} showArrow>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
};

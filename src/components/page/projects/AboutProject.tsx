import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function AboutProject() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      content="About the project"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button isIconOnly color="primary" variant="ghost">
          <IoInformationCircleOutline className="text-2xl" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>Project developed with Next.js</div>
      </PopoverContent>
    </Popover>
  );
}

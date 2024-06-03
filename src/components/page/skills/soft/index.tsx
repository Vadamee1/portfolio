"use client";

import { textCards } from "@/config/fonts";
import { SECONDSOFTSKILLS, SOFTSKILLS } from "@/constants/skills";
import { Card, Listbox, ListboxItem } from "@nextui-org/react";
import { IoEllipseOutline } from "react-icons/io5";

export default function SoftSkills() {
  return (
    <Card isBlurred className={`grid grid-cols-2 ${textCards.className}`}>
      <Listbox
        aria-label="Lista de sof skills"
        color="warning"
        variant="bordered"
      >
        {SOFTSKILLS.map((item) => (
          <ListboxItem
            key={item.key}
            className="text-xl"
            startContent={
              <IoEllipseOutline className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
            }
          >
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>
      <Listbox
        aria-label="Lista de sof skills"
        color="warning"
        variant="bordered"
      >
        {SECONDSOFTSKILLS.map((item) => (
          <ListboxItem
            key={item.key}
            startContent={
              <IoEllipseOutline className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
            }
          >
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>
    </Card>
  );
}

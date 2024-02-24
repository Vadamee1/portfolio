"use client";

import { textCards } from "@/config/fonts";
import { Frameworks } from "@/interfaces/portfolio/skills";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { IoRadioButtonOff } from "react-icons/io5";

interface Props {
  data: Frameworks[];
}

export const CustomeListBox = ({ data }: Props) => {
  console.log(data);

  return (
    <Listbox variant="bordered" color="warning" aria-label="Skills">
      {data.map((item) => (
        <ListboxItem
          key={item.key}
          textValue={item.content}
          startContent={<IoRadioButtonOff />}
        >
          <div>
            <p className={`${textCards.className} ${item.className}`}>
              {item.content}
            </p>
          </div>
        </ListboxItem>
      ))}
    </Listbox>
  );
};

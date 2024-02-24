"use client";

import { textCards } from "@/config/fonts";
import { ListBox } from "@/interfaces/customComponents/listbox";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { IoRadioButtonOff } from "react-icons/io5";

interface Props {
  data: ListBox[];
}

export const CustomListBox = ({ data }: Props) => {
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

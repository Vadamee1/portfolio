'use client'

import { textCards } from "@/config/fonts"
import { ItemsSection } from "@/interfaces/portfolio/skills"
import { Listbox, ListboxItem } from "@nextui-org/react"
import { IoRadioButtonOff } from "react-icons/io5"

interface Props {
  data: ItemsSection[]
}

export const CustomeListBox = ({data}: Props) => {

  return (
    <Listbox variant="bordered" color="warning">
      {data.map((item) => (
        <ListboxItem key={item.key} startContent={<IoRadioButtonOff/>}>
          <p className={`${item.className} ${textCards.className}`}>
            {item.content}
          </p>
        </ListboxItem>
      ))}
    </Listbox>
  )
}
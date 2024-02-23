import { Switch } from "@nextui-org/react"
import { Dispatch, SetStateAction } from "react"

interface Props {
  label: string
  color?: "warning"
  isSelected?: boolean
  setIsSelected?: Dispatch<SetStateAction<boolean>>
}

export const CustomSwitch = ({label, color, isSelected, setIsSelected}: Props) => {

  return (
    <Switch color={color} isSelected={isSelected} onValueChange={setIsSelected}>
      {label}
    </Switch>
  )
}
import { textCards } from "@/config/fonts"

interface Props {
  title: string 
}

export default function HeaderSoft ({title}: Props) {

  return (
    <>
      <p className={`ml-9 text-2xl ${textCards.className} font-bold`}>
        {title}
      </p>
    </>
  )
}
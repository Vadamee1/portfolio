import { textCards } from "@/config/fonts"

interface FooterProps {
  name: string
}

export const FooterHard = ({name}: FooterProps) => {
  
  return (
    <>
      <div>
        <p className={`${textCards.className}`}>{name}</p>
      </div>
    </>
  )
}
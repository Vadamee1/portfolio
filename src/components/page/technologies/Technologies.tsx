import { CustomeImage } from "@/components/custom/CustomeImage"
import { textCards } from "@/config/fonts"

interface BodyProps {
  href: string
}

export const BodyTechnologies = ({href}: BodyProps) => {

  return (
    <>
      <div>
        <CustomeImage 
          alt="Technology"
          src={href}
          height={100}
          width={100}
        />
      </div>
    </>
  )
}

interface FooterProps {
  name: string
}

export const FooterTechnologies = ({name}: FooterProps) => {
  
  return (
    <>
      <div>
        <p className={`${textCards.className}`}>{name}</p>
      </div>
    </>
  )
}
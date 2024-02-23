import { CustomeImage } from "@/components/custom/CustomeImage"

interface BodyProps {
  href: string
}

export const BodyHard = ({href}: BodyProps) => {

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
import { CustomSwitch } from "@/components/custom/CustomSwitch"
import { CustomeCard } from "@/components/custom/CustomeCard"
import { SKILLS } from "@/constants/skils"
import { TECHNOLOGIES } from "@/constants/technologies"
import BodySoft from "./soft/Body"
import HeaderSoft from "./soft/Header"
import { BodyHard } from "./hard/Body"
import { FooterHard } from "./hard/Footer"
import { Dispatch, SetStateAction } from "react"

interface Props {
  isSelected?: boolean
}

export const Skills = ({isSelected}: Props) => {

  return (
    <>
      <div>
        {
          isSelected ? (
            <div className="md:flex gap-10">
              {SKILLS.map((skill) => (
                <CustomeCard
                  key={skill.key}
                  body={<BodySoft skill={skill.items} />}
                  header={<HeaderSoft title={skill.section}/>}
                  isBlurred/>
              ))}
            </div>
          ) :
          (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 h-full">
              {TECHNOLOGIES.map((tech) => (
                <CustomeCard 
                  key={tech.key}
                  body={<BodyHard href={tech.href} />}
                  footer={<FooterHard name={tech.name} />}
                  isBlurred={true}
                />
              ))}
            </div>
          )
        }
      </div>
    </>
  )
}
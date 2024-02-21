import { CustomeCard } from "@/components/custom/CustomeCard"
import BodySkills from "@/components/page/skills/BodySkills"
import HeaderSkills from "@/components/page/skills/HeaderSkills"
import { SKILLS } from "@/constants/skils"

export default function TechnologiesPage () {

  return (
    <>
      <div className="md:flex gap-10">
        {SKILLS.map((skill) => (
          <CustomeCard key={skill.key} body={<BodySkills skill={skill.items} />} header={<HeaderSkills title={skill.section}/>} isBlurred/>
        ))}
      </div>
    </>
  )
}

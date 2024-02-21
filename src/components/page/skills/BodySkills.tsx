import { CustomeListBox } from "@/components/custom/CustomeListBox";
import { ItemsSection } from "@/interfaces/portfolio/skills";

interface Props {
  skill: ItemsSection[] 
}

export default function BodySkills ({skill}: Props) {

  return (
    <>
      <div className="">
        <CustomeListBox data={skill}/>
      </div>
    </>
  )
}

import { CustomeListBox } from "@/components/custom/CustomeListBox";
import { Frameworks } from "@/interfaces/portfolio/skills";

interface Props {
  skill?: Frameworks[];
}

export default function BodySoft({ skill }: Props) {
  return (
    <>
      <div className="">{skill ? <CustomeListBox data={skill} /> : ""}</div>
    </>
  );
}

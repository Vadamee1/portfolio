import { CustomeCard } from "@/components/custom/CustomeCard";
import { SKILLS } from "@/constants/skills";
import { BodyHard } from "./hard/Body";
import { FooterHard } from "./hard/Footer";

export const Skills = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 h-full">
        {SKILLS.map((tech) => (
          <CustomeCard
            key={tech.key}
            body={<BodyHard href={tech.href} />}
            footer={<FooterHard name={tech.name} />}
            isBlurred={true}
            isPressable
          />
        ))}
      </div>
    </>
  );
};

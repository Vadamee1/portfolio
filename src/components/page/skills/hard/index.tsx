import { CustomCard } from "@/components/custom/CustomCard";
import { HARDSKILLS } from "@/constants/skills";
import { BodyHard } from "./Body";
import { FooterHard } from "./Footer";

export const Skills = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 h-full">
        {HARDSKILLS.map((tech) => (
          <CustomCard
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

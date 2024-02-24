import { CustomeCard } from "@/components/custom/CustomeCard";
import { SKILLS } from "@/constants/skills";
import { BodyHard } from "./hard/Body";
import { FooterHard } from "./hard/Footer";
import { CustomPopover } from "@/components/custom/CustomPopover";
import BodySoft from "./soft/Body";

export const Skills = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 h-full">
        {SKILLS.map((tech) => (
          <>
            {tech.frameworks ? (
              <CustomPopover
                key={tech.key}
                color="default"
                backdrop="blur"
                trigger={
                  <CustomeCard
                    body={<BodyHard href={tech.href} />}
                    footer={<FooterHard name={tech.name} />}
                    isBlurred={true}
                    isPressable
                  />
                }
                content={<BodySoft skill={tech.frameworks} />}
              />
            ) : (
              <CustomeCard
                body={<BodyHard href={tech.href} />}
                footer={<FooterHard name={tech.name} />}
                isBlurred={true}
                isPressable
              />
            )}
          </>
        ))}
      </div>
    </>
  );
};

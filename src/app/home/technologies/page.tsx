import { CustomeCard } from "@/components/custom/CustomeCard";
import { BodyTechnologies, FooterTechnologies } from "@/components/page/technologies/Technologies";
import { TECHNOLOGIES } from "@/constants/technologies";

export default function TechnologiesPage () {

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {TECHNOLOGIES.map((tech) => (
          <CustomeCard 
            key={tech.key}
            body={<BodyTechnologies href={tech.href} />}
            footer={<FooterTechnologies name={tech.name} />}
            isBlurred={true}
          />
        ))}
      </div>
    </>
  )
}


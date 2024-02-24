import { CustomImage } from "@/components/custom/CustomImage";

interface BodyProps {
  href: string;
}

export const BodyHard = ({ href }: BodyProps) => {
  return (
    <>
      <div>
        <CustomImage alt="Technology" src={href} height={100} width={100} />
      </div>
    </>
  );
};

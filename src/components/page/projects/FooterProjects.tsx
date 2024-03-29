import { CustomButton } from "@/components/custom/CustomButton";
import { textCards } from "@/config/fonts";
import { RBA_LINK } from "@/constants/project/links";
import { Link } from "@nextui-org/react";

export default function FooterProjects() {
  return (
    <>
      <div className="flex w-full justify-between">
        <p className={`flex justify-start ml-1 ${textCards.className}`}>
          RBA - Roleplay
        </p>
        <CustomButton
          size="md"
          variant="ghost"
          color="danger"
          link={Link}
          href={RBA_LINK}
        >
          Navegar
        </CustomButton>
      </div>
    </>
  );
}

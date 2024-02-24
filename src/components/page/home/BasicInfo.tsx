import { Link } from "@nextui-org/react";
import { CustomButton } from "@/components/custom/CustomButton";
import { CustomImage } from "@/components/custom/CustomImage";
import { SIDEBARPHOTO } from "@/constants/photo";

export const BasicInfo = () => {
  return (
    <>
      <div className="grid gap-5">
        <div className="flex justify-center mt-3">
          <CustomImage
            alt="User image"
            src={SIDEBARPHOTO}
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <p className="hidden md:flex justify-center text-4xl">
            David Hernández Martínez
          </p>
          <p className="flex justify-center text-4xl md:hidden">David</p>
          <p className="flex justify-center text-4xl md:hidden">Hernández</p>
          <p className="flex justify-center text-4xl md:hidden">Martínez</p>
          <p className="flex justify-center text-2xl">Software developer</p>
        </div>
        <div className="flex justify-center gap-5">
          <div>
            <CustomButton
              isIconOnly
              size="lg"
              link={Link}
              href="https://github.com/Vadamee1"
            >
              <CustomImage
                alt="GitHub"
                src="/images/contact/GitHub.png"
                width={50}
                height={50}
              />
            </CustomButton>
          </div>
          <div>
            <CustomButton
              isIconOnly
              size="lg"
              link={Link}
              href="https://www.linkedin.com/in/david-hernandez-203969295/"
            >
              <CustomImage
                alt="Linkdln"
                src="/images/contact/LinkedIn.png"
                width={50}
                height={50}
              />
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

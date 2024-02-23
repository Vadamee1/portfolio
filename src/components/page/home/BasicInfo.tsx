import { Link } from "@nextui-org/react";
import { CustomeButton } from "@/components/custom/CustomeButton";
import { CustomeImage } from "@/components/custom/CustomeImage";
import { SIDEBARPHOTO } from "@/constants/photo";

export const BasicInfo = () => {
  return (
    <>
      <div className="grid gap-5">
        <div className="flex justify-center">
          <CustomeImage
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
            <CustomeButton
              isIconOnly
              size="lg"
              color="primary"
              link={Link}
              href="https://github.com/Vadamee1"
            >
              <CustomeImage
                alt="GitHub"
                src="/images/GitHub.png"
                width={50}
                height={50}
              />
            </CustomeButton>
          </div>
          <div>
            <CustomeButton
              isIconOnly
              size="lg"
              link={Link}
              href="https://www.linkedin.com/in/david-hernandez-203969295/"
            >
              <CustomeImage
                alt="Linkdln"
                src="/images/LinkedIn.png"
                width={50}
                height={50}
              />
            </CustomeButton>
          </div>
        </div>
      </div>
    </>
  );
};

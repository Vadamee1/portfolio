import { CustomCard } from "@/components/custom/CustomCard";
import { BasicInfo } from "./BasicInfo";

export const SideBar = () => {
  return (
    <>
      <div className="">
        <CustomCard body={<BasicInfo />} isBlurred={true} />
      </div>
    </>
  );
};

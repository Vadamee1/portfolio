import { CustomeCard } from "@/components/custom/CustomeCard"
import { BasicInfo } from "./BasicInfo"

export const SideBar = () => {

  return (
    <>
      <div className="">
        <CustomeCard body={<BasicInfo/>} isBlurred={true} />
      </div>
    </>
  )
}
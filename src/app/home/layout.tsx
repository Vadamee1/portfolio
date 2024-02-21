import { CustomeTabs } from "@/components/custom/CustomeTabs";
import { SideBar } from "@/components/page/home/SideBar";
import { INFO_TABS } from "@/constants/tabs";
import { ReactNode } from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className="md:flex h-full items-center" style={{minHeight: "100vh"}}>
        <div className="sm: ml-5 mr-5 mb-5 md:flex items-center">
          <SideBar/>
        </div>
        <div className="flex-1 mr-5 ml-5">
          <div className="flex justify-center">
            <CustomeTabs tabs={INFO_TABS}/>
          </div>
          <div className="sm: flex mt-5 md:flex justify-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
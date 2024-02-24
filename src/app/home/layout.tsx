import { CustomTabs } from "@/components/custom/CustomTabs";
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
      <div className="md:flex h-full" style={{ minHeight: "100vh" }}>
        <div className="sm: mt-5 ml-5 mr-5 mb-5 md:flex items-center">
          <SideBar />
        </div>
        <div className="flex-1 mr-5 ml-5 md:mt-auto mb-auto">
          <div className="flex justify-center mb-10">
            <CustomTabs tabs={INFO_TABS} />
          </div>
          <div className="sm:flex mt-5 md:flex justify-center pb-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

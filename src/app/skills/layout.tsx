import RouterTabs from "@/components/page/skills/RouterTabs";
import { textCards } from "@/config/fonts";
import { hardSkillsText, softSkillsText } from "@/constants/skills";
import { Card, CardBody } from "@nextui-org/react";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "David Hernández",
  description: "Portfolio",
  icons: "/images/metaicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="grid md:flex h-screen justify-center gap-10">
      <div className="flex items-center justify-center">
        <Card isBlurred className="w-96">
          <CardBody className={`flex ${textCards.className} text-xl gap-4`}>
            <p>{hardSkillsText}</p>
            <p>{softSkillsText}</p>
          </CardBody>
        </Card>
      </div>
      <div className="grid justify-center">
        <div className="flex justify-center items-center">
          <RouterTabs />
        </div>
        <div className="md:h-1/6">{children}</div>
      </div>
    </div>
  );
}

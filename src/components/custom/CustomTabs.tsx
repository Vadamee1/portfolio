"use client";

import { TabsType } from "@/interfaces/customComponents/tabs";
import { Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  tabs: TabsType[];
}

export const CustomTabs = ({ tabs }: Props) => {
  const pathname = usePathname();

  return (
    <Tabs size="lg" variant="underlined" color="warning" selectedKey={pathname}>
      {tabs.map((tab) => (
        <Tab key={tab.key} title={tab.title} href={tab.href} as={Link}></Tab>
      ))}
    </Tabs>
  );
};

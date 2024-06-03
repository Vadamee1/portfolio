"use client";

import { Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RouterTabs() {
  const pathname = usePathname();

  return (
    <Tabs
      aria-label="Router"
      variant="underlined"
      selectedKey={pathname}
      color="warning"
      size="lg"
    >
      <Tab key="/skills/hard" title="Hard" as={Link} href="/skills/hard" />
      <Tab key="/skills/soft" title="Soft" as={Link} href="/skills/soft" />
    </Tabs>
  );
}

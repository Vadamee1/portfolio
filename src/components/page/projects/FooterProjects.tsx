"use client";

import { textCards } from "@/config/fonts";
import { Button, Link } from "@nextui-org/react";
import AboutProject from "./AboutProject";

interface Props {
  projectName: string;
  href: string;
}

export default function FooterProjects({ projectName, href }: Props) {
  return (
    <div className="flex w-full justify-between items-center">
      <p className={`flex justify-start ml-1 ${textCards.className}`}>
        {projectName}
      </p>
      <div className="flex gap-2">
        <Button variant="ghost" color="warning" as={Link} href={href}>
          Navegar
        </Button>
        <AboutProject />
      </div>
    </div>
  );
}

"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import Logo from "./Logo";
export default function SchoolExperience() {
  return (
    <div className="flex flex-col gap-3">
      <p>School Experience</p>
      <Accordion variant="bordered">
        <AccordionItem
          aria-label="School experience"
          title="Universidad del Valle de México"
          subtitle="Data Science Engineer"
          startContent={<Logo image="/images/UVMLogo.jpg" />}
        >
          <p className="flex">
            Calzada de Tlalpan 3016/3058, Mexico City, Mexico.
          </p>
          <p>August 2020 - Present</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

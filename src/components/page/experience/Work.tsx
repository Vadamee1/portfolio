"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import Logo from "./Logo";
import Skills from "./Skills";
export default function WorkExperience() {
  return (
    <div className="flex flex-col gap-3">
      <p>Work Experience</p>
      <Accordion variant="bordered">
        <AccordionItem
          aria-label="School experience"
          title="Infotec, centro de investigación e innovación en TIC"
          subtitle="Fullstack Developer"
          startContent={<Logo image="/images/InfotecLogo.jpg" />}
        >
          <div>
            <p className="overflow-auto">
              Av. San Fernando 37, Col. Toriello Guerra, Tlalpan, Ciudad de
            </p>
            <p>México, CDMX 14050, MX.</p>
            <p>December 2021 - Present</p>
            <Skills />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

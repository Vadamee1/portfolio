"use client";

import { CustomSwitch } from "@/components/custom/CustomSwitch";
import { Skills } from "@/components/page/skills";
import { useState } from "react";

interface Props {
  isSelected?: boolean;
}

export default function TechnologiesPage() {
  const [isSoft, setIsSoft] = useState(true);

  return (
    <>
      <div className="grid">
        <CustomSwitch
          label={isSoft ? "Soft" : "Hard"}
          color="warning"
          isSelected={isSoft}
          setIsSelected={setIsSoft}
        />
        <Skills isSelected={isSoft} />
      </div>
    </>
  );
}

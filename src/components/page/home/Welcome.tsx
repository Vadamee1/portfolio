"use client";

import { typewriterFont } from "@/config/fonts";
import { welcome } from "@/constants/home";
import { Button, Card, CardHeader } from "@nextui-org/react";
import Typewriter from "typewriter-effect";
export default function Welcome() {
  return (
    <Card isBlurred className="md:w-1/3">
      {/* <CardHeader className="flex justify-end">
        <Button color="warning" variant="ghost">
          About me
        </Button>
      </CardHeader> */}
      <div className={`text-3xl ${typewriterFont.className} ml-5 mb-5 mt-5`}>
        <Typewriter
          options={{
            strings: welcome,
            autoStart: true,
          }}
        />
      </div>
    </Card>
  );
}

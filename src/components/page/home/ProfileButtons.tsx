import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

export default function ProfileButtons() {
  return (
    <div className="flex gap-5">
      <Button isIconOnly size="lg" as={Link} href="https://github.com/Vadamee1">
        <Image
          alt="GitHub"
          src="/images/contact/GitHub.png"
          width={50}
          height={50}
        />
      </Button>
      <Button
        isIconOnly
        size="lg"
        as={Link}
        href="https://www.linkedin.com/in/david-hernandez-203969295/"
      >
        <Image
          alt="Linkdln"
          src="/images/contact/LinkedIn.png"
          width={50}
          height={50}
        />
      </Button>
    </div>
  );
}

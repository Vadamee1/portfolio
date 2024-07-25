import { Image } from "@nextui-org/react";

export default function CardImage() {
  return (
    <div className="flex justify-center mt-3">
      <Image alt="User image" src="/images/profile/David.jpg" width={300} height={300} />
    </div>
  );
}

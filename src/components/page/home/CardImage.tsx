import { Image } from "@nextui-org/react";
import { SIDEBARPHOTO } from "@/constants/photo";

export default function CardImage() {
  return (
    <div className="flex justify-center mt-3">
      <Image alt="User image" src={SIDEBARPHOTO} width={300} height={300} />
    </div>
  );
}

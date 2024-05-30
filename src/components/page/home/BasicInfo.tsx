import { nameFont } from "@/config/fonts";
import ProfileButtons from "./ProfileButtons";

export default function BasicInfo() {
  return (
    <div className="grid justify-center mt-5">
      <div
        className={`flex gap-1 text-2xl sm:gap-2 sm:text-3xl ${nameFont.className} mr-5 ml-5`}
      >
        <span>David</span>
        <span>Hernández</span>
        <span>Martínez</span>
      </div>
      <div>
        <p
          className={`flex justify-center text-xl sm:text-2xl ${nameFont.className}`}
        >
          Software developer
        </p>
      </div>
    </div>
  );
}

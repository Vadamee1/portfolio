import { Image } from "@nextui-org/react";

interface Props {
  image: string;
  width?: number;
}

export default function Logo({ image, width }: Props) {
  return <Image alt="Logo" src={image} width={width ?? 50} />;
}

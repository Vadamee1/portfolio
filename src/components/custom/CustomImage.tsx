import { Image } from "@nextui-org/react";

interface Props {
  alt: string;
  src: string;
  width: number;
  height: number;
  isZoomed?: boolean;
}

export const CustomImage = ({ alt, src, width, height, isZoomed }: Props) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      isBlurred
      isZoomed={isZoomed ? isZoomed : false}
    />
  );
};

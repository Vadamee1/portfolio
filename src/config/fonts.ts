import {
  Inter,
  Libre_Baskerville,
  Lora,
  Merriweather,
  Noto_Serif,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const textCards = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const nameFont = Lora({
  subsets: ["latin"],
});

export const typewriterFont = Noto_Serif({
  subsets: ["latin"],
});

export const titleFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

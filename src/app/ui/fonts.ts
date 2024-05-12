import { Roboto, Nunito, Noto_Sans } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
export const roboto = Roboto({ weight: ["300", "700"], subsets: ["latin"] });
export const roboto_mono = Roboto_Mono({
    weight: ["400", "600"],
    subsets: ["latin"],
});
export const nunito = Nunito({ weight: ["300", "400"], subsets: ["latin"] });
export const notosan = Noto_Sans({
    weight: ["300", "400"],
    subsets: ["latin"],
});

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface navLink {
    name: string;
    address: string;
}
export default function NavLink({ name, address }: navLink) {
    const pathName = usePathname();
    return (
        <li
            className={`hover:underline underline-offset-4 duration-100 delay-300 ${
                pathName === address ? " underline underline-offset-8" : ""
            }`}
        >
            <Link href={address}>{name}</Link>
        </li>
    );
}

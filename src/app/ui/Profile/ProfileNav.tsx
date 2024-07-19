"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ProfileNav() {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <>
            <span className="flex justify-start items-center gap-6 text-2xl">
                <Link
                    href={"/profile"}
                    className={`${
                        pathName === "/profile" ? " text-blue-500" : ""
                    }`}
                >
                    Posts
                </Link>
                <p>|</p>
                <Link
                    href={"/likeposts"}
                    className={`${
                        pathName === "likePosts" ? "bg-blue-400" : ""
                    }`}
                >
                    Liked Posts
                </Link>
            </span>
        </>
    );
}

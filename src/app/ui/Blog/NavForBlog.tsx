"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavForBlog() {
    const pathName = usePathname();
    return (
        <>
            <span className="flex gap-6 text-2xl font-bold m-7">
                <h1>
                    {" "}
                    <Link
                        href={"/blog"}
                        className={`${
                            pathName === "/blog" ? "text-blue-500" : ""
                        }`}
                    >
                        For you
                    </Link>
                </h1>
                <span className="bg-white w-[5px]"></span>
                <h1>
                    {" "}
                    <Link
                        href={"/blog/following"}
                        className={`${
                            pathName === "/blog/following"
                                ? "text-blue-500"
                                : ""
                        }`}
                    >
                        Following
                    </Link>{" "}
                </h1>
                <hr />
            </span>
        </>
    );
}

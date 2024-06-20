"use client";
import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { MdSunny } from "react-icons/md";
export default function Nav() {
    return (
        <>
            <nav className="flex pt-5   justify-between mx-8 items-center">
                <span>
                    <h1 className=" text-4xl font-medium">
                        <Link href={"/"}>Vibra</Link>
                    </h1>
                </span>
                <span className="">
                    <ul className="flex text-2xl justify-center items-center gap-8">
                        <NavLink name="Home" address="/" />
                        <NavLink name="Blog" address="/blog" />
                        <NavLink name="Create" address="/create" />
                    </ul>
                </span>

                <span className="flex justify-center items-center gap-5">
                    <span className="text-2xl">
                        <MdSunny />
                    </span>
                    <Link href={"/login"}>
                        <button className=" border-2 border-black bg-blue-500 px-5 py-2 rounded-lg">
                            Login
                        </button>
                    </Link>
                </span>
            </nav>
        </>
    );
}

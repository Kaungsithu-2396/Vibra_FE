import Link from "next/link";
import React from "react";
import NavForBlog from "../ui/Blog/NavForBlog";
import Search from "@/components/Search";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            {/* <input
                type="text"
                name=""
                className=" outline-none bg-zinc-500/20 p-3 m-6 rounded-lg"
                size={40}
                placeholder="Search"
                id=""
            /> */}
            <div className="flex justify-start m-5 items-center">
                <Search isSearchBtn={false} size={30} />
            </div>
            <NavForBlog />
            {children}
        </div>
    );
}

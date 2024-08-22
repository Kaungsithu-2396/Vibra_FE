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
            <div className="flex justify-start m-5 items-center">
                <Search isSearchBtn={false} size={30} />
            </div>
            <NavForBlog />
            {children}
        </div>
    );
}

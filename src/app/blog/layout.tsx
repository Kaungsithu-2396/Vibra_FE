import Link from "next/link";
import React from "react";

export default function Layout({
    children,
    pageAsType,
}: Readonly<{
    children: React.ReactNode;
    pageAsType: React.ReactNode;
}>) {
    return (
        <div className="">
            <input
                type="text"
                name=""
                className=" outline-none bg-zinc-500/20 p-3 m-6 rounded-lg"
                size={40}
                placeholder="Serach"
                id=""
            />

            {children}
            {pageAsType}
        </div>
    );
}

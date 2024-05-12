import React from "react";
import Link from "next/link";
export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="m-6">
            <h1>mingalar par</h1>
            <span className="flex gap-6 text-2xl font-bold">
                <h1>
                    {" "}
                    <Link href={"/blog"}>For you</Link>
                </h1>
                <span className="bg-white w-[5px]"></span>
                <h1>
                    {" "}
                    <Link href={"/blog/following"}>Following</Link>{" "}
                </h1>
                <hr />
            </span>
            {children}
        </div>
    );
}

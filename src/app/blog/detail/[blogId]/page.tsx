import BlogDetail from "@/app/ui/Blog/BlogDetail";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface prop {
    params: {
        blogId: String;
    };
}
export default function page({ params }: prop) {
    return (
        <section className="my-6 m-auto w-[60%] ">
            <BlogDetail />
        </section>
    );
}

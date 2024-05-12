import React from "react";
import Image from "next/image";
interface blogCard {
    image: string;
    title: String;
    Category: String;
    paragraph: String;
}
export default function BlogCard({
    image,
    title,
    Category,
    paragraph,
}: blogCard) {
    return (
        <>
            <div className="">
                <Image
                    src={image}
                    alt="testing image"
                    width={500}
                    height={100}
                    className="rounded-md text-center  "
                />
                <p className="py-2 text-blue-400 font-bold">{Category}</p>
                <h1 className="w-[80%] font-bold  text-2xl">{title}</h1>
                <p className="w-[90%] text-justify pt-4 text-neutral-400 ">
                    {" "}
                    {paragraph}
                </p>
            </div>
        </>
    );
}

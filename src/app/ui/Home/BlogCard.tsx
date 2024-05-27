import React from "react";
import Image from "next/image";
import Link from "next/link";
interface blogCard {
    image: string;
    title: String;
    Category: String;
    paragraph: String;
    horizontal: Boolean;
    id: String;
}
export default function BlogCard({
    image,
    title,
    Category,
    paragraph,
    horizontal,
    id,
}: blogCard) {
    return (
        <>
            <div
                className={`${
                    horizontal
                        ? "flex justify-center  items-start gap-6 my-5"
                        : ""
                }`}
            >
                <Image
                    src={image}
                    alt="testing image"
                    width={500}
                    height={100}
                    className="rounded-md text-center  "
                />
                <span className="">
                    <p className="py-2 text-blue-400 font-bold">{Category}</p>
                    <span>
                        <h1 className="w-[80%] font-bold  text-2xl">{title}</h1>
                        <span className="  pt-2 gap-5 flex text-neutral-300 font-bold">
                            -<p>Jonas Martin</p>
                            <p>2 Feb 2024</p>
                        </span>
                        <p className="w-[50] text-justify pt-4 text-neutral-400 ">
                            {" "}
                            {paragraph.slice(0, 150)}....
                        </p>
                    </span>

                    {horizontal ? (
                        <div className="mt-5">
                            <p className="text-blue-400 underline underline-offset-4">
                                <Link href={`/blog/detail/${id}`}>
                                    {" "}
                                    View More
                                </Link>
                            </p>
                        </div>
                    ) : (
                        <Link
                            href={`/blog/detail/${id}`}
                            className=" underline text-blue-400"
                        >
                            <p>View More</p>
                        </Link>
                    )}
                </span>
            </div>
        </>
    );
}

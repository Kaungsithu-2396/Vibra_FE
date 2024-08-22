import React from "react";
import Image from "next/image";
import Link from "next/link";

interface blogCard {
    image: string;
    title: String;
    Category: Array<string>;
    paragraph: String;
    horizontal: Boolean;
    id: String;
}
export default async function BlogCard({
    image,
    title,
    Category,
    paragraph,
    horizontal,
    id,
}: blogCard) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <>
            <div
                className={`${
                    horizontal
                        ? "flex justify-center  items-start gap-6 my-5"
                        : "my-5"
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
                    <div className="flex gap-5">
                        {Category.map((el, idx) => {
                            return (
                                <>
                                    <p
                                        className="py-1 text-blue-500 underline underline-offset-2 cursor-pointer font-bold "
                                        key={idx}
                                    >
                                        <Link
                                            href={`/category/${el.toLowerCase()}`}
                                        >
                                            #{el[0].toUpperCase()}
                                            {el.slice(1)}
                                        </Link>
                                    </p>
                                </>
                            );
                        })}
                    </div>

                    {/* <p className="py-2 text-blue-400 font-bold">{Category}</p> */}
                    <span>
                        <h1 className="w-[80%] font-bold  text-2xl">{title}</h1>
                        <span className="  pt-2  flex flex-col  text-neutral-300 font-bold">
                            <p>- Jonas Martin</p>
                            <p>2 Feb 2024</p>
                        </span>
                        <p className="w-[87%] text-justify pt-4 text-neutral-400 ">
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
                            className=" underline block my-3 text-blue-400"
                        >
                            <p>View More</p>
                        </Link>
                    )}
                </span>
            </div>
        </>
    );
}

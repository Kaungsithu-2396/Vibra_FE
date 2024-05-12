import React from "react";
import Image from "next/image";
interface topStoryCard {
    no: number;
    title: string;
    author: string;
    date: string;
    img: string;
}
export default function TopStoryCard({
    no,
    title,
    author,
    date,
    img,
}: topStoryCard) {
    return (
        <div className="flex gap-8 my-5">
            <p className=" text-2xl   w-8 h-8  flex justify-center items-center font-bold   text-center ">
                {no}.
            </p>
            <span className="flex flex-col items-start gap-y-2 w-full">
                <h1 className="text-2xl">{title}</h1>
                <h2 className="  text-blue-400">
                    {author}.  <span>{date}</span>
                </h2>
            </span>
            <Image
                src={img}
                width={200}
                height={100}
                alt={`Image for ${title}`}
            />
        </div>
    );
}

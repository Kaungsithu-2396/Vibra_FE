import Image from "next/image";
import React from "react";
interface prop {
    params: {
        blogId: String;
    };
}
export default function page({ params }: prop) {
    return (
        <section className="my-6 m-auto w-[60%] ">
            <div className=" h-[24vh] flex flex-col justify-center items-start">
                <h1 className="text-4xl font-bold mb-2    text-start ">
                    Travelling to the coffee shop with the favourite person
                </h1>
                <span className="text-start  mt-3 mb-0 gap-8 flex ">
                    <h2>27 Feb 2024</h2>
                    <h2>Jonas Martin</h2>
                </span>
            </div>

            <Image
                src={"/test-2.avif"}
                alt="Detail image for testing"
                width={500}
                height={700}
                className=" w-full m-auto rounded-md"
            />
            <div className=""></div>
        </section>
    );
}

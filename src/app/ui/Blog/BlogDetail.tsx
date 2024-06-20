import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
export default function BlogDetail() {
    return (
        <>
            <div className=" h-[24vh] flex flex-col justify-center items-start">
                <h1 className="text-4xl font-bold mb-2    text-start ">
                    Travelling to the coffee shop with the favourite person
                </h1>
                <span className="py-2">
                    <Link
                        href={"/category/travel"}
                        className="underline underline-offset-2 text-blue-400"
                    >
                        #Travel
                    </Link>
                </span>
                <span className="text-start  mt-3 mb-0 ">
                    <span className="flex gap-6">
                        <h2>Jonas Martin</h2>
                        <Link href={"/"}>
                            {" "}
                            <p className="text-blue-300 font-bold flex justify-center items-center gap-2 cursor-pointer">
                                {" "}
                                <FaPlus /> Follow
                            </p>
                        </Link>
                    </span>

                    <h2 className="py-3">27 Feb 2024</h2>
                </span>
            </div>

            <Image
                src={"/test-2.avif"}
                alt="Detail image for testing"
                width={500}
                height={700}
                className=" w-full m-auto rounded-md"
            />
            <div className="py-5">
                <p className="text-xl text-neutral-300 leading-10 tracking-widest indent-10 text-justify ">
                    Lastly, after a little hand-picking, we found the 8 repos
                    below. 👇 These repos will be particularly useful when you
                    want to build cool web apps. If you are interested in
                    working on building small apps, and you enjoy the applied AI
                    side, we recommend you check out Creator Quests, an
                    open-source challenge that rewards developers for creating
                    cool GenerativeAI apps with ChatGPT, Claude, Gemini and
                    more. 🙃 💰 The latest Creator Quest challenges you to build
                    developer tools using Generative AI. To participate, simply
                    sign up to Quine and head to Quests.
                </p>
            </div>
        </>
    );
}

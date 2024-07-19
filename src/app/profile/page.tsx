"use client";
import Image from "next/image";
import React from "react";
import ProfileNav from "../ui/Profile/ProfileNav";
import { usePathname } from "next/navigation";
export default function page() {
    return (
        <section className="h-screen mt-5">
            <div className=" w-2/3 m-auto  top-40 left-[10%] absolute ">
                <div className="my-5 grid grid-cols-3 justify-between items-start gap-8">
                    <Image
                        src={"/test-2.avif"}
                        alt="Image for something"
                        width={400}
                        height={300}
                        className=" rounded-md"
                    />
                    <div className=" col-span-2 grid grid-cols-1 gap-4">
                        <div className="mt-5">
                            <h1 className="text-3xl font-bold">Kaung Si Thu</h1>
                        </div>
                        <div className="my-5 grid grid-cols-3 justify-around items-center gap-6">
                            <h1 className="flex flex-col ">
                                <span className="text-2xl font-bold">2322</span>
                                <span className="font-bold text-xl  ">
                                    Followers
                                </span>
                            </h1>
                            <h1 className="flex flex-col ">
                                <span className="text-2xl font-bold">22</span>
                                <span className="font-bold text-xl  ">
                                    Following
                                </span>
                            </h1>
                            <h1 className="flex flex-col ">
                                <span className="text-2xl font-bold">2</span>
                                <span className="font-bold text-xl  ">
                                    Posts
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
                <ProfileNav />
            </div>
            <div className="w-2/3 m-auto "></div>
        </section>
    );
}

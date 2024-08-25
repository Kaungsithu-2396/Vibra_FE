import React from "react";
import Image from "next/image";
export default async function ProfileHeadTag() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <>
            <Image
                src={"/test-2.avif"}
                alt="Image for something"
                width={900}
                height={600}
                className=" rounded-md"
            />
            <div className=" col-span-2 grid grid-cols-1 gap-4">
                <div className="my-5">
                    <h1 className="text-3xl font-bold">Kaung Si Thu</h1>
                </div>
                <div className="my-5 grid grid-cols-3 justify-around items-center gap-3">
                    <h1 className="flex flex-col ">
                        <span className="text-2xl font-bold">2322</span>
                        <span className="font-bold text-xl  text-white/70 ">
                            Followers
                        </span>
                    </h1>
                    <h1 className="flex flex-col ">
                        <span className="text-2xl font-bold">22</span>
                        <span className="font-bold text-xl text-white/70  ">
                            Following
                        </span>
                    </h1>
                    <h1 className="flex flex-col ">
                        <span className="text-2xl font-bold">2</span>
                        <span className="font-bold text-xl text-white/70  ">
                            Posts
                        </span>
                    </h1>
                </div>
            </div>
        </>
    );
}

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function ProfileLoading() {
    return (
        <>
            <Skeleton className="w-[370px] h-[240px]" />

            <div className=" col-span-2 grid grid-cols-1 gap-4">
                <div className="my-5">
                    {/* <h1 className="text-3xl font-bold">Kaung Si Thu</h1> */}
                    <Skeleton className="w-[200px] h-[20px]" />
                </div>
                <div className="my-5 grid grid-cols-3 justify-around items-center gap-3">
                    <h1 className="flex flex-col ">
                        {/* <span className="text-2xl font-bold">2322</span> */}
                        <Skeleton className="w-[100px] my-4 h-[20px]" />
                        <span className="font-bold text-xl  text-white/70 ">
                            Followers
                        </span>
                    </h1>
                    <h1 className="flex flex-col ">
                        <Skeleton className="w-[100px] my-4 h-[20px]" />
                        <span className="font-bold text-xl text-white/70  ">
                            Following
                        </span>
                    </h1>
                    <h1 className="flex flex-col ">
                        <Skeleton className="w-[100px] my-4 h-[20px]" />
                        <span className="font-bold text-xl text-white/70  ">
                            Posts
                        </span>
                    </h1>
                </div>
            </div>
        </>
    );
}

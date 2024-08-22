import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
export default function Loading() {
    //     return <Skeleton className="w-[100rem] h-[20px] rounded-md" />;
    return (
        <div className="grid grid-cols-3 gap-5">
            {[1, 2, 3].map((item, idx) => {
                return (
                    <>
                        <div
                            key={idx}
                            className={`
                        "my-5 h-screen w-[525px] h-[611px]"
                }`}
                        >
                            <Skeleton className="w-[500px] h-[300px] my-4 rounded-md" />

                            <span className="">
                                <div className="flex mr-4 gap-1 mb-4 ">
                                    {[1, 2].map((el, idx) => {
                                        return (
                                            <>
                                                <p className=" " key={idx}>
                                                    <Skeleton className="w-[103px] h-[30px] py-3" />
                                                </p>
                                            </>
                                        );
                                    })}
                                </div>

                                {/* <p className="py-2 text-blue-400 font-bold">{Category}</p> */}
                                <span className="mr-2">
                                    <Skeleton className="w-[100px] h-[30px] my-4" />
                                    <span className=" my-4  flex flex-col  text-neutral-300 font-bold">
                                        <Skeleton className="w-[140px] h-[20px] my-3" />
                                        <Skeleton className="w-[100px] h-[20px]" />
                                    </span>
                                    <Skeleton className="w-[450px] h-[100px] my-4 text-justify pt-4 text-neutral-400 " />
                                </span>

                                <Skeleton className=" w-[100px] h-[20px]" />
                            </span>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

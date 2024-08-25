import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function loading() {
    return (
        <section className="w-2/3 m-auto">
            {Array(3)
                .fill("")
                .map((el, idx) => {
                    return (
                        <>
                            <div
                                className={`${"flex justify-center  items-start gap-6 my-5"}`}
                                key={idx}
                            >
                                <Skeleton className="w-[500px] h-[300px]" />
                                <span className="">
                                    <div className="flex gap-1">
                                        {Array(3)
                                            .fill("")
                                            .map((el, idx) => {
                                                return (
                                                    <>
                                                        <p
                                                            className="py-1 text-blue-500 underline underline-offset-2 cursor-pointer font-bold "
                                                            key={idx}
                                                        >
                                                            <Skeleton className="w-[180px] h-[30px]" />
                                                        </p>
                                                    </>
                                                );
                                            })}
                                    </div>
                                    {/* <p className="py-2 text-blue-400 font-bold">{Category}</p> */}
                                    <span className="">
                                        <Skeleton className="w-[500px] h-[30px] m-3" />
                                        <span className="  pt-2  flex flex-col  text-neutral-300 font-bold">
                                            <Skeleton className="w-[100px] h-[20px] mb-2" />
                                            <Skeleton className="w-[100px] h-[20px]" />
                                        </span>
                                        <p className="w-[87%] text-justify pt-4 text-neutral-400 ">
                                            {" "}
                                            <Skeleton className="w-[500px] h-[70px] my-4 text-justify pt-4 text-neutral-400 " />
                                        </p>
                                    </span>
                                    <div className="mt-5">
                                        <p className="text-blue-400 underline underline-offset-4">
                                            {/* <Link href={`/blog/detail/${id}`}> View More</Link> */}
                                            <Skeleton className="w-[100px] h-[20px]" />
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </>
                    );
                })}
        </section>
    );
}

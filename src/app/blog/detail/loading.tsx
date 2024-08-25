import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function loading() {
    return (
        <section className="w-2/3 m-auto">
            <div className=" h-[24vh] flex flex-col justify-center items-start">
                <Skeleton className="w-[100%] h-[200px]" />
                <span className="py-2">
                    <Skeleton className="w-[200px] h-[30px]" />
                </span>
                <div className="  mt-3 mb-0 w-full ">
                    <div className="flex justify-between items-center  gap-10">
                        <div className="flex justify-center items-center gap-6">
                            <Skeleton className="w-[100px] h-[30px]" />
                            <Skeleton className="w-[130px] h-[30px]" />
                        </div>
                        <div className="">
                            <Skeleton className="w-[130px] h-[30px]" />
                        </div>
                    </div>

                    <Skeleton className="w-[200px] h-[40px] my-5" />
                </div>
            </div>

            <Skeleton className="w-full h-[600px]" />
            <div className="py-5">
                <Skeleton className="w-full h-[300px]" />
            </div>
        </section>
    );
}

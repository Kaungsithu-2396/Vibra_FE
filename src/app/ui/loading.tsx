import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
    return (
        <>
            <Skeleton className="h-screen w-[90%] m-auto" />
        </>
    );
}

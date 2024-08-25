import React from "react";
import Image from "next/image";
import ProfileNav from "../ui/profile_/ProfileNav";
import { Suspense } from "react";
import ProfileLoading from "../ui/profile_/ProfileLoading";
import { resolve } from "path";
import ProfileHeadTag from "../ui/profile_/ProfileHeadTag";
async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className=" my-5">
            <div className=" w-2/3 m-auto top-10   relative ">
                <div className="my-5 grid grid-cols-3 justify-center items-center gap-6">
                    <Suspense fallback={<ProfileLoading />}>
                        <ProfileHeadTag />
                    </Suspense>
                </div>
                <ProfileNav />
                <div className="">{children}</div>
            </div>
        </section>
    );
}

export default Layout;

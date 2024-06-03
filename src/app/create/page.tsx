"use client";
import React, { use } from "react";
import Form from "../ui/Form";

export default function page() {
    return (
        <>
            <section className="w-2/3 m-auto h-screen ">
                {/* <h1 className="text-4xl mt-6 text-center ">Create Post</h1> */}
                <Form />
            </section>
        </>
    );
}

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface formInput {
    title: String;
    Description: String;
    
}
export default function page() {
    return (
        <>
            <section className="w-2/3 m-auto h-screen">
                <h1 className="text-4xl m-5">Create Post</h1>
            </section>
        </>
    );
}

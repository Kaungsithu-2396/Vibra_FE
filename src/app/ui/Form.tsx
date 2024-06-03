"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import React from "react";
interface formInput {
    title: String;
    description: String;
    file: String;
}
export default function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<formInput>();
    const onSubmit: SubmitHandler<formInput> = (data) => {
        console.log(data);
        reset();
    };
    return (
        <>
            <form
                action=""
                method="post"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center px-5 py-5   gap-8  h-screen m-5"
            >
                <div className="text-center text-3xl">
                    <label htmlFor="title">Create Post</label>
                </div>
                <label
                    htmlFor="title"
                    className="text-2xl text-neutral-400 text-left"
                >
                    Title
                </label>
                <input
                    type="text"
                    {...register("title")}
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="bg-black/50 border border-white/30 px-5 focus:outline-none py-3 rounded-md w-full"
                />
                <label htmlFor="" className="text-2xl text-neutral-400">
                    Featured photo
                </label>
                <input
                    type="file"
                    {...register("file")}
                    name="file"
                    id=""
                    className="bg-black/50 border px-5 py-3 border-white/30 rounded-md w-full"
                />
                <label
                    htmlFor="categoryList"
                    className="text-2xl text-neutral-400"
                >
                    Category
                </label>
                <div className="w-full">
                    <Select>
                        <SelectTrigger className="w-[180px] bg-black focus:outline-none">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white cursor-pointer">
                            <SelectItem className="" value="light">
                                Light
                            </SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <label
                    htmlFor="description"
                    className="text-2xl text-neutral-400"
                >
                    Description
                </label>

                <textarea
                    rows={5}
                    cols={20}
                    className="bg-black/50 focus:outline-none border border-white/30 px-3 py-5 rounded-md w-full"
                    placeholder="Description"
                    id="description"
                    {...register("description")}
                />

                <div className="text-center ">
                    <button className="text-white border hover:bg-blue-400 hover:text-black hover:scale-105 duration-300 delay-200 text-center border-white rounded-md px-3 py-5 w-[14%] font-bold">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

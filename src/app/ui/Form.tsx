"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useState } from "react";
import { LiaOilCanSolid } from "react-icons/lia";
import isDuplicatedItem from "../../../util/findDuplicatedItem";

interface formInput {
    title: String;
    description: String;
    file: String;
    category: String;
}
export default function Form() {
    const router = useRouter();
    const [disableInput, setDisableInput] = useState<boolean>(false);
    const [categoryCol, setCategoryCol] = useState<String[]>([]);
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<formInput>();
    const onSubmit: SubmitHandler<formInput> = (data) => {
        console.log("data", data);
        // router.push("/");
    };
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const inputValue = e.target as HTMLInputElement;
        const isItemDuplicated = isDuplicatedItem(
            inputValue.value,
            categoryCol
        );
        if (e.key === "Enter") {
            e.preventDefault();
            if (isItemDuplicated) {
                setError("This item already exisits");
            } else {
                categoryCol.length >= 4 && setDisableInput(true);
                setCategoryCol([...categoryCol, inputValue.value]);

                reset({
                    category: "",
                });
            }
        }
    };

    return (
        <>
            <form
                action=""
                method="post"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center flex-wrap px-5 py-5 gap-5  h-screen m-5"
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
                    {...register("title", {
                        required: "please provide the title",
                        maxLength: {
                            value: 100,
                            message: "Title word count exceed more than 100",
                        },
                    })}
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="bg-black/50 border border-white/30 px-5 focus:outline-white py-3 rounded-md w-full"
                />

                {errors.title?.type === "required" && (
                    <p className="text-red-400">{errors.title?.message} </p>
                )}
                {errors.title?.type === "maxLength" && (
                    <p className="text-red-400">{errors.title?.message} </p>
                )}
                <label htmlFor="" className="text-2xl text-neutral-400">
                    Featured photo
                </label>
                <input
                    type="file"
                    {...register("file", {
                        required: "please select at least one photo",
                    })}
                    id="file"
                    className="bg-black/50 border p-4 border-white/30 rounded-md w-full"
                />

                <p className="text-red-400 pt-2">
                    {errors?.file?.type === "required" && errors?.file?.message}
                </p>

                <label
                    htmlFor="categoryList"
                    className="text-2xl text-neutral-400"
                >
                    Category
                </label>
                <div className="w-full ">
                    <Input
                        {...register("category", {
                            required: "please choose at least one category",
                        })}
                        name="category"
                        className={`bg-black py-6`}
                        disabled={disableInput}
                        onKeyDown={onKeyDownHandler}
                        onChange={() => setError("")}
                    />
                    {errors?.category?.type === "required" && (
                        <p className=" text-red-400 mt-3">
                            {errors?.category?.message}
                        </p>
                    )}
                    <>
                        <ul className="flex flex-row gap-5 p-5">
                            {categoryCol.map((el, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className=" bg-slate-300 px-5 py-2 text-black font-bold rounded-md"
                                    >
                                        {el}
                                    </li>
                                );
                            })}
                        </ul>
                        <p className="text-red-400">{error}</p>
                        {
                            <h1 className=" text-blue-500">
                                {categoryCol.length >= 5 &&
                                    "You have selected the maximum category type"}
                            </h1>
                        }
                    </>
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
                    className="bg-black/50  focus:outline-white border border-white/30 px-3 py-5 rounded-md w-full"
                    placeholder="Description"
                    id="description"
                    {...register("description", {
                        required: "please provide the description",
                        maxLength: {
                            value: 400,
                            message:
                                "Word count exceeds more than system is capable",
                        },
                    })}
                />
                {errors?.description?.type === "required" && (
                    <p className="text-red-400">
                        {errors?.description?.message}
                    </p>
                )}

                <div className="text-center ">
                    <button className="text-white border hover:bg-blue-400 hover:text-black hover:scale-105 duration-300 delay-200 text-center border-white rounded-md px-3 py-5 w-[14%] font-bold">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

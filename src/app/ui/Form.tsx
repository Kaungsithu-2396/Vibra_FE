"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useState } from "react";
import isDuplicatedItem from "../../../util/findDuplicatedItem";

interface formInput {
    category: string;
    title: String;
    description: String;
    file: String;
}
export default function Form() {
    const router = useRouter();
    const [categoryCol, setCategoryCol] = useState<String[]>([]);
    const [errorDuplicated, setErrorDuplicated] = useState("");
    const [preview, setPreview] = useState<string | null>();
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm<formInput>();

    const onSubmit: SubmitHandler<formInput> = (data) => {
        const { description, file, title } = data;
        const transformData = {
            description,
            file,
            title,
            category: [...categoryCol],
        };
        console.log(transformData);
        router.push("/");
    };
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const inputValue = e.target as HTMLInputElement;
        const isItemDuplicated = isDuplicatedItem(
            inputValue.value,
            categoryCol
        );
        if (e.key === "Enter") {
            e.preventDefault();
            if (!inputValue.value) {
                setErrorDuplicated("Invalid value");
                return;
            }
            if (isItemDuplicated) {
                setErrorDuplicated("This item already exisits");
            } else {
                setCategoryCol([...categoryCol, inputValue.value]);
                reset({
                    category: "",
                });
            }
        }
    };
    const onClickHandler = (value: String) => {
        setCategoryCol((categoryCol) => {
            return categoryCol.filter((item) => item !== value);
        });
    };
    const fileDeleteHandler = () => {
        setPreview("");
        reset({
            file: "",
        });
    };

    return (
        <>
            <form
                action=""
                method="post"
                onSubmit={handleSubmit(onSubmit)}
                className=" flex flex-col justify-center px-5 py-5 gap-5 h-screen"
            >
                <div className="text-center my-5 text-3xl">
                    <label htmlFor="title">Create Post</label>
                </div>
                <div className="grid grid-cols-2 gap-6 justify-between">
                    <div className=" flex flex-col gap-6">
                        <div className="title">
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
                                        message:
                                            "Title word count exceed more than 100",
                                    },
                                })}
                                name="title"
                                id="title"
                                placeholder="Title"
                                className="bg-black/50 border border-white/30 px-5 my-4 focus:outline-white py-3 rounded-md w-full"
                            />

                            {errors.title?.type === "required" && (
                                <p className="text-red-400">
                                    {errors.title?.message}{" "}
                                </p>
                            )}
                            {errors.title?.type === "maxLength" && (
                                <p className="text-red-400">
                                    {errors.title?.message}{" "}
                                </p>
                            )}
                        </div>

                        <div className="category">
                            <label
                                htmlFor="category"
                                className="text-2xl text-neutral-400"
                            >
                                Category
                            </label>
                            <div className="w-full ">
                                <Input
                                    {...register("category")}
                                    id="category"
                                    name="category"
                                    className={`bg-black py-6 my-3`}
                                    disabled={categoryCol.length >= 5}
                                    onKeyDown={onKeyDownHandler}
                                    onChange={() => setErrorDuplicated("")}
                                    autoComplete="off"
                                />

                                <>
                                    {categoryCol.length > 0 && (
                                        <ul className="flex flex-row gap-5 p-5">
                                            {categoryCol.map((el, idx) => {
                                                return (
                                                    <li
                                                        key={idx}
                                                        className=" hover:scale-105 duration-150 delay-150 relative cursor-pointer bg-slate-800 text-white px-5 py-2 text-black/80 font-bold rounded-md"
                                                    >
                                                        {el}
                                                        <span
                                                            className="absolute text-base text-red-700 top-0 right-1"
                                                            onClick={() =>
                                                                onClickHandler(
                                                                    el
                                                                )
                                                            }
                                                        >
                                                            x
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}

                                    {/* {categoryCol.length === 0 && (
                                        <p className=" text-red-400 p-0">.</p>
                                    )} */}
                                    <p className="text-red-400">
                                        {errorDuplicated}
                                    </p>
                                    {
                                        <h1 className=" text-blue-500">
                                            {categoryCol.length >= 5 &&
                                                "You have selected the maximum category type"}
                                        </h1>
                                    }
                                </>
                            </div>
                        </div>
                        <div className="descripton">
                            <label
                                htmlFor="description"
                                className="text-2xl text-neutral-400"
                            >
                                Description
                            </label>

                            <textarea
                                rows={5}
                                cols={30}
                                className="bg-black/50  focus:outline-white border border-white/30 px-3 py-5 my-3 rounded-md w-full"
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
                        </div>
                    </div>

                    {/* file */}
                    <div className="">
                        <label
                            htmlFor="file"
                            className="text-2xl text-neutral-400"
                        >
                            Featured photo
                        </label>

                        <input
                            type="file"
                            {...register("file", {
                                required: "please select at least one photo",
                            })}
                            onChange={(e) => {
                                if (!e.target.files) return;
                                const sizeInMB = 3;
                                const maxFileUploadSize =
                                    sizeInMB * 1024 * 1024;
                                if (
                                    e.target.files[0]?.size > maxFileUploadSize
                                ) {
                                    reset({
                                        file: "",
                                    });
                                    console.log("file big");
                                    //limit file size
                                    setError("file", {
                                        type: "large file",
                                        message: `Photo must be under ${sizeInMB} MB`,
                                    });
                                } else {
                                    if (!e.target.files[0]?.size) {
                                        setPreview("");
                                    } else {
                                        setPreview(
                                            URL.createObjectURL(
                                                e.target.files[0]
                                            )
                                        );
                                    }
                                }
                            }}
                            accept="image/jpeg, image/png"
                            id="file"
                            className="bg-black/50 border p-4 border-white/30 my-3 rounded-md w-full"
                        />

                        {preview && (
                            <div className="relative max-w-[300px]">
                                <img
                                    src={preview}
                                    alt="preview image for selected file"
                                    className="   rounded-md "
                                />

                                <div className="absolute opacity-0 hover:opacity-100 duration-200 delay-200 cursor-pointer top-0 w-full bg-black/50 h-full">
                                    {" "}
                                    <p
                                        className="flex justify-center hover:text-red-400 underline underline-offset-2 w-full h-full items-center"
                                        onClick={fileDeleteHandler}
                                    >
                                        Delete
                                    </p>
                                </div>
                            </div>
                        )}
                        <p className="text-red-400 pt-2">
                            {errors?.file?.type === "required" &&
                                errors?.file?.message}
                            {errors?.file?.type === "large file" &&
                                errors?.file?.message}
                        </p>
                    </div>
                </div>

                <div className="text-center ">
                    <button className="text-white border-2  hover:bg-blue-400 hover:text-black hover:scale-105 duration-300 delay-200 text-center  rounded-md px-3 py-5 w-[30%] font-bold">
                        Upload
                    </button>
                </div>
            </form>
        </>
    );
}

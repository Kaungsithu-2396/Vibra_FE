"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import PasswordInput from "@/components/ui/PasswordInput";
interface formInput {
    email: String;
    password: String;
}
export default function page() {
    const [hidePassword, setHidePassword] = useState(true);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<formInput>();

    const onClickHandler = () => {
        setHidePassword(!hidePassword);
    };
    const onSubmit: SubmitHandler<formInput> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <section className=" flex justify-center items-center h-screen">
                <form
                    className="w-[40%] m-auto grid grid-cols-1 gap-4  px-5 py-6 "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label htmlFor="" className="  my-5 text-4xl">
                        Login
                    </label>
                    <label htmlFor="email" className=" text-neutral-400">
                        Email
                    </label>
                    <Input
                        {...register("email", {
                            required:
                                "Please fill the email for authentication",
                        })}
                        id="email"
                        className=" w-full bg-slate-900 border-none focus:outline-none"
                        placeholder="Email"
                        type="email"
                        autoComplete="off"
                    />
                    {errors?.email?.type === "required" && (
                        <p className="text-red-500">
                            {errors?.email?.message?.toString()}
                        </p>
                    )}
                    <label htmlFor="password" className="text-neutral-400">
                        Password
                    </label>
                    {/* <span className=" relative">
                        <Input
                            {...register("password", {
                                required: "Invalid password",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            })}
                            className=" w-full bg-slate-900 focus:outline-none border-none "
                            id="password"
                            placeholder="Password"
                            type={`${hidePassword ? "password" : "text"}`}
                        />
                        <span className="absolute  right-3 top-6 cursor-pointer z-10">
                            {hidePassword ? (
                                <FaEye onClick={onClickHandler} />
                            ) : (
                                <FaEyeLowVision onClick={onClickHandler} />
                            )}
                        </span>
                        {errors?.password?.type === "required" && (
                            <p className="text-red-500 py-5">
                                {errors?.password?.message}
                            </p>
                        )}
                        {errors?.password?.type === "minLength" && (
                            <p className="text-red-500 py-5">
                                {errors?.password?.message}
                            </p>
                        )}
                    </span> */}
                    <PasswordInput
                        placeholder="password"
                        password={"password"}
                        register={register}
                        errors={errors}
                    />

                    <button className=" px-4 py-2 border-2 bg-blue-500 text-white     duration-300 delay-300 hover:font-bold border-black w-full  m-auto rounded-md ">
                        <span className="flex justify-center items-center gap-2">
                            login <HiOutlineArrowSmallRight />
                        </span>
                    </button>
                    <Link
                        href={"/signup"}
                        className=" underline text-blue-400 "
                    >
                        <label htmlFor="" className="cursor-pointer">
                            New Here? Sign Up
                        </label>
                    </Link>
                </form>
            </section>
        </>
    );
}

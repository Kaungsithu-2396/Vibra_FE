"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import PasswordInput from "@/components/ui/PasswordInput";
interface signUpFormInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export default function page() {
    const {
        register,
        formState: { errors },
        watch,
        handleSubmit,
        reset,
    } = useForm<signUpFormInput>();
    const onSubmit: SubmitHandler<signUpFormInput> = (data) => {
        const { confirmPassword, ...dataToTransport } = data;
        console.log("data", dataToTransport);
        reset();
    };

    return (
        <>
            <section className="h-screen flex justify-center items-center">
                <form
                    action=""
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-[36%] grid grid-cols-1 gap-4"
                >
                    <label
                        htmlFor=""
                        className="text-3xl uppercase text-center  text-blue-500"
                    >
                        Sign Up
                    </label>
                    <label
                        htmlFor="name"
                        className="mt-4 text-xl text-gray-400 "
                    >
                        name
                    </label>
                    <Input
                        autoComplete="off"
                        {...register("name", {
                            required: "Please fill the name",
                        })}
                        className=" bg-slate-900 border-none"
                        placeholder="Name"
                        type="name"
                        id="name"
                    />
                    {errors?.name?.type === "required" && (
                        <p className="text-red-500">{errors.name.message}</p>
                    )}
                    <label
                        htmlFor="email"
                        className="mt-4 text-xl text-gray-400"
                    >
                        email
                    </label>
                    <Input
                        autoComplete="off"
                        type="email"
                        {...register("email", {
                            required: "please fill the valid email",
                        })}
                        className="  bg-slate-900 border-none"
                        placeholder="Email"
                        id="email"
                    />
                    {errors?.email?.type === "required" && (
                        <p className="text-red-500">{errors.email.message}</p>
                    )}
                    <label
                        htmlFor="password"
                        className="mt-4 text-xl text-gray-400"
                    >
                        password
                    </label>
                    <PasswordInput
                        placeholder="password"
                        password={"password"}
                        register={register}
                        errors={errors}
                    />
                    <label
                        htmlFor="cf_password"
                        className="mt-4 text-xl text-gray-400"
                    >
                        Confirm password
                    </label>
                    <Input
                        {...register("confirmPassword", {
                            validate: (cp: string) => {
                                if (watch("password") !== cp) {
                                    return "Password do not match";
                                }
                            },
                        })}
                        className="  bg-slate-900 border-none"
                        placeholder="Retype your password"
                        id="cf_password"
                        type="password"
                    />
                    {errors?.confirmPassword?.type === "validate" && (
                        <p className="text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                    <input
                        type="submit"
                        className=" cursor-pointer mt-5 bg-blue-400 px-3 py-4 rounded-md text-black hover:font-bold duration-300 delay-300"
                        value="Sign up"
                    />
                </form>
            </section>
        </>
    );
}

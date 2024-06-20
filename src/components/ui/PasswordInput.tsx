"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import {
    UseFormRegister,
    FieldErrors,
    FieldValues,
    Path,
} from "react-hook-form";
interface typePassword<T extends FieldValues> {
    password: Path<T>;
    register: UseFormRegister<T>;
    errors: FieldErrors;
    placeholder: string;
}
export default function PasswordInput<T extends FieldValues>({
    password,
    register,
    errors,
    placeholder,
}: typePassword<T>) {
    const [hidePassword, setHidePassword] = useState(true);
    const onClickHandler = () => {
        setHidePassword(!hidePassword);
    };
    return (
        <>
            <span className=" relative">
                <Input
                    {...register(password, {
                        required: "Invalid password",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    className=" w-full bg-slate-900 focus:outline-none border-none "
                    id="password"
                    placeholder={placeholder}
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
                        {errors?.password?.message?.toString()}
                    </p>
                )}
                {errors?.password?.type === "minLength" && (
                    <p className="text-red-500 py-5">
                        {errors?.password?.message?.toString()}
                    </p>
                )}
            </span>
        </>
    );
}

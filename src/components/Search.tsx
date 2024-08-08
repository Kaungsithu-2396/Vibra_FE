"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { IoSearch } from "react-icons/io5";
interface searchBtn {
    isSearchBtn: Boolean;
    size: number;
}
export default function Search({ isSearchBtn, size }: searchBtn) {
    const [keyWord, setKeyWord] = useState<string>("");
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.target.value);
    };
    return (
        <>
            <div className="relative">
                <IoSearch
                    className={`text-2xl absolute text-white/50 top-5 left-3`}
                />
                <Input
                    placeholder="Search"
                    size={size}
                    className=" border-0   pl-[3.3rem]  bg-zinc-400/20"
                    onChange={onChangeHandler}
                    value={keyWord}
                />
            </div>

            {isSearchBtn && (
                <button className="  text-xl  bg-blue-500 px-8  rounded-md py-2  hover:text-black duration-500 delay-400">
                    search
                </button>
            )}
        </>
    );
}

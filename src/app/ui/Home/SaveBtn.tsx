"use client";
import React, { useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoBookmarkSlash } from "react-icons/go";

function SaveBtn() {
    const [isSave, setIsSave] = useState<boolean>(true);
    const onClickHandler = () => {
        setIsSave(!isSave);
    };
    return (
        <>
            <button
                onClick={onClickHandler}
                className={`flex gap-1 ${
                    !isSave ? "bg-blue-500" : "bg-red-500 "
                } px-5 py-2 rounded-md cursor-pointer duration-200 delay-300 hover:font-bold  justify-center items-center`}
            >
                {isSave ? ` UnSave` : "Save"}
                {isSave ? <GoBookmarkSlash /> : <IoBookmarkOutline />}
            </button>
        </>
    );
}

export default SaveBtn;

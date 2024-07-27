"use client";
import React, { useState } from "react";
import { MdDataSaverOn } from "react-icons/md";
function SaveBtn() {
    const [isSave, setIsSave] = useState<boolean>(false);
    return (
        <>
            <button
                onClick={() => {
                    alert("save done");
                }}
                className="flex gap-1 bg-blue-500 px-5 py-2 rounded-md cursor-pointer duration-200 delay-300 hover:font-bold  justify-center items-center"
            >
                Save <MdDataSaverOn />{" "}
            </button>
        </>
    );
}

export default SaveBtn;

import React from "react";

export default function page() {
    const postCount = 0;
    return (
        <section>
            {!postCount && (
                <p className=" min-h-screen flex justify-center items-center gap-y-5 text-3xl">
                    no <span className="text-blue-500 px-4"> saved </span> posts
                </p>
            )}
        </section>
    );
}

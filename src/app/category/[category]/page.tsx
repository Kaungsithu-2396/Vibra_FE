import BlogCard from "@/app/ui/Home/BlogCard";
import React from "react";
interface props {
    params: {
        category: String;
    };
}
export default function page({ params: { category } }: props) {
    return (
        <section>
            <div className=" flex justify-center items-center h-[30vh] bg-[#140005] my-4">
                <h1 className=" font-bold">
                    <span className="text- inline-block text-center  text-neutral-400">
                        Blog for{" "}
                    </span>{" "}
                    <br />
                    <span className="text-5xl inline-block pt-3">
                        "
                        {category.slice(0, 1).toUpperCase() + category.slice(1)}
                        "
                    </span>
                </h1>
            </div>
            <div className=" w-[90%] m-auto">
                <h2 className="text-3xl mb-7 text-neutral-300 ">
                    Recommended Blogs
                </h2>
                <div className="my-3 flex justify-center gap-5 items-start">
                    <BlogCard
                        image="/test-2.avif"
                        title="Minglar par"
                        Category={["Travel", "Sport"]}
                        paragraph={
                            "ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                        horizontal={false}
                        id={"1"}
                    />
                    <BlogCard
                        image="/test-2.avif"
                        title="Minglar par"
                        Category={["Travel", "Sport"]}
                        paragraph={
                            "ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                        horizontal={false}
                        id={"1"}
                    />
                    <BlogCard
                        image="/test-2.avif"
                        title="Minglar par"
                        Category={["Travel", "Sport"]}
                        paragraph={
                            "ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                        horizontal={false}
                        id={"1"}
                    />
                </div>
            </div>
        </section>
    );
}

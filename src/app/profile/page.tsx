import React from "react";
import BlogCard from "../ui/Home/BlogCard";

export default function page() {
    return (
        <section className="my-5 flex justify-start flex-col items-start">
            <BlogCard
                title={"Welcome back"}
                horizontal={true}
                id={"1"}
                image={"/test-2.avif"}
                Category={["travel", "sport", "crime","nice","couple"]}
                paragraph={"Lorem Ipsum is "}
            />
            <BlogCard
                title={"Welcome back"}
                horizontal={true}
                id={"1"}
                image={"/test-2.avif"}
                Category={["travel", "sport", "crime"]}
                paragraph={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                }
            />
            <BlogCard
                title={"Welcome back"}
                horizontal={true}
                id={"1"}
                image={"/test-2.avif"}
                Category={["travel", "sport", "crime"]}
                paragraph={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                }
            />
            <BlogCard
                title={"Welcome back"}
                horizontal={true}
                id={"1"}
                image={"/test-2.avif"}
                Category={["travel", "sport", "crime"]}
                paragraph={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                }
            />
            <BlogCard
                title={"Welcome back"}
                horizontal={true}
                id={"1"}
                image={"/test-2.avif"}
                Category={["travel", "sport", "crime"]}
                paragraph={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                }
            />
        </section>
    );
}

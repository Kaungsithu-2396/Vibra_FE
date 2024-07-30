import React from "react";
import BlogCard from "../ui/Home/BlogCard";

export default function page() {
    return (
        <section className="w-2/3 m-auto">
            <BlogCard
                Category={["Travel"]}
                image="/test-2.avif"
                horizontal={true}
                id={"2"}
                title="Travelling to the coffee shop with the favourite person"
                paragraph={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                }
            />
            <BlogCard
                Category={["Travel"]}
                image="/test-2.avif"
                horizontal={true}
                id={"2"}
                title="Travelling to the coffee shop with the favourite person"
                paragraph={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                }
            />
            <BlogCard
                Category={["Travel"]}
                image="/test-2.avif"
                horizontal={true}
                id={"2"}
                title="Travelling to the coffee shop with the favourite person"
                paragraph={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                }
            />
            <BlogCard
                Category={["Travel"]}
                image="/test-2.avif"
                horizontal={true}
                id={"2"}
                title="Travelling to the coffee shop with the favourite person"
                paragraph={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                }
            />
        </section>
    );
}

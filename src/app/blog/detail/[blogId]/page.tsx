import BlogDetail from "@/app/ui/Blog/BlogDetail";
import BlogCard from "@/app/ui/Home/BlogCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface prop {
    params: {
        blogId: String;
    };
}
export default function page({ params }: prop) {
    return (
        <section className="my-6 m-auto w-[60%] ">
            <BlogDetail />
            <div className="my-8">
                <h2 className="text-3xl">Related Blog</h2>
                <div className="my-4 flex justify-center items-center gap-5">
                    <BlogCard
                        image="/test-2.avif"
                        title={"Minglar par"}
                        Category={"Sport"}
                        paragraph={
                            "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                        }
                        horizontal={false}
                        id={"2"}
                    />
                    <BlogCard
                        image="/test-2.avif"
                        title={"Minglar par"}
                        Category={"Sport"}
                        paragraph={
                            "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                        }
                        horizontal={false}
                        id={"2"}
                    />
                    <BlogCard
                        image="/test-2.avif"
                        title={"Minglar par"}
                        Category={"Sport"}
                        paragraph={
                            "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                        }
                        horizontal={false}
                        id={"2"}
                    />
                </div>
            </div>
        </section>
    );
}

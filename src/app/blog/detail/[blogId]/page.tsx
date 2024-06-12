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
export default function page({ params: { blogId } }: prop) {
    return (
        <section className="my-6  ">
            <div className=" w-[60%] m-auto">
                <BlogDetail />
            </div>

            <div className="my-8 w-[80%] m-auto ">
                <h2 className="text-3xl my-9">Related Blogs</h2>
                <div className="my-4">
                    <BlogCard
                        image="/test-2.avif"
                        title={"Minglar par"}
                        Category={"Sport"}
                        paragraph={
                            "sing 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                        }
                        horizontal={true}
                        id={"2"}
                    />
                    <BlogCard
                        image="/test-2.avif"
                        title={"Minglar par"}
                        Category={"Sport"}
                        paragraph={
                            "sing 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                        }
                        horizontal={true}
                        id={"2"}
                    />
                    <BlogCard
                        image="/test-2.avif"
                        title={"Minglar par"}
                        Category={"Sport"}
                        paragraph={
                            "sing 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                        }
                        horizontal={true}
                        id={"2"}
                    />
                </div>
            </div>
        </section>
    );
}

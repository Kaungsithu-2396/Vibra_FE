import Link from "next/link";
import NavLink from "./ui/Home/NavLink";
import Image from "next/image";
import BlogCard from "./ui/Home/BlogCard";
import TopStoryCard from "./ui/Home/TopStoryCard";
const data = [
    {
        id: 1,
        title: "Golden Land, Myanmar, Crisis Around the country",
        author: "kaung si thu",
        date: "24 Jun 2024",
        img: "/test-2.avif",
    },
    {
        id: 2,
        title: "Kaung Si Thu , 120th Billionaire of US",
        author: "Ma Pa",
        date: "24 Jun 2024",
        img: "/test-2.avif",
    },
    {
        id: 3,
        title: "Kaung Si Thu, SASS Owner in USA",
        author: "BBC burmese",
        date: "24 Jun 2024",
        img: "/test-2.avif",
    },
];
export default function Home() {
    return (
        <main className="">
            <section className="flex justify-center items-center h-[40vh]">
                <div className="flex justify-center items-center flex-col gap-8">
                    <h1 className=" text-5xl">
                        Read, <span className="  text-blue-400 ">Inspire</span>,
                        Create
                    </h1>
                    <h2 className="w-[38%] m-auto text-center text-2xl text-neutral-400">
                        A platform that allows your brain to touch with quality
                        content from trustworthy source
                    </h2>
                    <button className="  bg-blue-400 px-8 text-black rounded-md font-medium py-3 hover:scale-105 hover:font-bold duration-500 delay-400">
                        Explore
                    </button>
                </div>
            </section>
            <section className=" w-3/4 m-auto flex justify-center items-start">
                <div className="w-[50%]">
                    <BlogCard
                        Category={"Travel"}
                        image="/test-2.avif"
                        title="Travelling to the coffee shop with the favourite person"
                        paragraph={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                        }
                    />
                </div>
                <div className="w-[50%]">
                    <h1 className="text-4xl  mb-8">Top Stories</h1>
                    {data.map((el, index) => {
                        return (
                            <TopStoryCard
                                no={index + 1}
                                title={el.title}
                                author={el.author}
                                date={el.date}
                                img={el.img}
                            />
                        );
                    })}
                </div>
            </section>
            <section className="h-screen"></section>
        </main>
    );
}

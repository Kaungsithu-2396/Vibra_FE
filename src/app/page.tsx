import BlogCard from "./ui/Home/BlogCard";
import TopStoryCard from "./ui/Home/TopStoryCard";
import Link from "next/link";
const categoryList = [
    {
        id: 1,
        name: "Technology",
    },
    {
        id: 2,
        name: "Travel",
    },
    {
        id: 3,
        name: "Sport",
    },
];
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
            <section className="flex justify-center items-center h-[60vh]">
                <div className="flex justify-center items-center flex-col gap-8">
                    <h1 className=" text-5xl">
                        Read, <span className="  text-blue-400 ">Inspire</span>,
                        Create
                    </h1>
                    <h2 className="w-[90%] m-auto text-center text-2xl text-neutral-400">
                        A platform that allows your brain to touch with quality
                        content from trustworthy sources
                    </h2>
                    <span className="flex gap-5">
                        <input
                            type="text"
                            name=""
                            size={50}
                            placeholder="Search"
                            className="bg-zinc-400/20 px-5 py-3 rounded-lg"
                            id=""
                        />
                        <button className="   bg-blue-400 px-8 text-black rounded-md font-bold py-3 hover:scale-105 hover:font-bold duration-500 delay-400">
                            search
                        </button>
                    </span>
                </div>
            </section>
            <section className=" w-3/4 m-auto flex justify-center items-start">
                <div className="w-[50%]">
                    <BlogCard
                        Category={"Travel"}
                        image="/test-2.avif"
                        horizontal={false}
                        id={"2"}
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
            <section className="w-3/4 m-auto py-6">
                <h1 className="text-4xl">Top Categories</h1>
                <div className="flex gap-5 items-center pt-6">
                    {categoryList.map((el) => {
                        return (
                            <>
                                <Link
                                    href={`/category/${el.name.toLowerCase()}`}
                                >
                                    <p
                                        key={el.id}
                                        className="border-2 border-white px-5 py-3 font-semibold rounded-md transition-all hover:text-black hover:scale-110 duration-300 bg-[#1c1c1c] delay-300 cursor-pointer hover:bg-blue-400  "
                                    >
                                        {el.name}
                                    </p>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </section>

            <section className=" py-8 w-3/4 m-auto">
                <h1 className="text-4xl my-5">Recent Posts</h1>
                <div className=" grid grid-cols-2 gap-6">
                    <BlogCard
                        Category={"Travel"}
                        horizontal={false}
                        image="/test-2.avif"
                        id={"1"}
                        title="Travelling to the coffee shop with the favourite person"
                        paragraph={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                        }
                    />
                    <BlogCard
                        horizontal={false}
                        Category={"Travel"}
                        image="/test-2.avif"
                        id={"2"}
                        title="Travelling to the coffee shop with the favourite person"
                        paragraph={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                        }
                    />
                    <BlogCard
                        horizontal={false}
                        Category={"Travel"}
                        image="/test-2.avif"
                        id={"3"}
                        title="Travelling to the coffee shop with the favourite person"
                        paragraph={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                        }
                    />
                    <BlogCard
                        Category={"Travel"}
                        image="/test-2.avif"
                        id={"4"}
                        title="Travelling to the coffee shop with the favourite person"
                        paragraph={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                        }
                        horizontal={false}
                    />
                    <BlogCard
                        horizontal={false}
                        Category={"Travel"}
                        image="/test-2.avif"
                        id={"5"}
                        title="Travelling to the coffee shop with the favourite person"
                        paragraph={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                        }
                    />
                    <BlogCard
                        horizontal={false}
                        Category={"Travel"}
                        image="/test-2.avif"
                        id={"6"}
                        title="Travelling to the coffee shop with the favourite person"
                        paragraph={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam numquam, impedit quod dicta quidem cumque deleniti aperiam molestiae ut nobis?"
                        }
                    />
                </div>
                <div className="text-center my-3">
                    <button className="bg-blue-400 px-6 py-3 rounded-md  font-extrabold my-4">
                        <Link href={"/blog"}>View All</Link>
                    </button>
                </div>
            </section>
        </main>
    );
}

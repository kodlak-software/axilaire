import React from 'react';
import blog_1 from '../media/img/blog_1.jpg'
import blog_2 from '../media/img/blog_2.jpg'
import blog_3 from '../media/img/blog_3.jpg'

const Blog = () => {
    return (
        <section className="bg-white rounded-tr-md">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

                    <p className="max-w-lg mx-auto mt-4 text-gray-500">
                        Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
                        pie.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <div className="relative">
                            <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog_1} alt="" />

                            <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-md ">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Tom Hank</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                                </div>
                            </div>
                        </div>

                        <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                            What do you want to know about UI
                        </h1>

                        <hr className="w-32 my-6 text-gray-500" />

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                            praesentium, alias nam? Tempore
                        </p>

                        <div className="w-full flex justify-end">
                            <a href="#" className="inline-block mt-4 text-gray-500 underline hover:text-gray-400">Read more</a>
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog_2} alt="" />

                            <div className="absolute bottom-0 flex p-3 bg-white rounded-tr-md ">
                                <img className="object-cover object-center w-10 h-10 rounded-full"src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">arthur melo</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                                </div>
                            </div>
                        </div>

                        <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                            All the features you want to know
                        </h1>

                        <hr className="w-32 my-6 text-gray-500" />

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                            praesentium, alias nam? Tempore
                        </p>

                        <div className="w-full flex justify-end">
                            <a href="#" className="inline-block mt-4 text-gray-500 underline hover:text-gray-400">Read more</a>
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog_3} alt="" />

                            <div className="absolute bottom-0 flex p-3 bg-white  rounded-tr-md">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                                </div>
                            </div>
                        </div>

                        <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                            Which services you get from Meraki UI
                        </h1>

                        <hr className="w-32 my-6 text-gray-500" />

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                            praesentium, alias nam? Tempore
                        </p>

                        <div className="w-full flex justify-end">
                            <a href="#" className="inline-block mt-4 text-gray-500 underline hover:text-gray-400">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
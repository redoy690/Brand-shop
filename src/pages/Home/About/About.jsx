import { Link } from "react-router-dom";
import { AiFillAlert,AiFillAlipayCircle,AiFillAlipaySquare,AiFillAliwangwang,AiFillAccountBook,AiFillCalculator } from "react-icons/ai";

const About = () => {

    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">How To Open A Assignemnt</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg" data-aos="flip-left">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <AiFillAlert></AiFillAlert>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bangla</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="flip-left">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <AiFillAlipayCircle></AiFillAlipayCircle>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">English</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="flip-left">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                 <AiFillAlipaySquare></AiFillAlipaySquare>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Math</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="flip-left">
                            <div className="border border-gray-200 p-6 rounded-lg" >
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <AiFillAliwangwang></AiFillAliwangwang>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Statistics</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="flip-left">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <AiFillAccountBook></AiFillAccountBook>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Accounting</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4" data-aos="flip-left">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                 <AiFillCalculator></AiFillCalculator>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Finance</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/createassignment">
                        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create Assignment</button>
                    </Link>
                </div>
            </section>
            <div className="border-b-2"></div>
        </div>
    );
};

export default About;
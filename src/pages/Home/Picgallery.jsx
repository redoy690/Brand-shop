import React from 'react';

const Picgallery = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="flex items-center justify-center bg-gray-50 p-4">
                        <div className="flex flex-col max-w-7xl w-full md:w-[80%]">
                            <div className="flex flex-col lg:flex-row ">
                                <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                                    <div className="flex items-center justify-start w-full">
                                        <div className="flex-col w-[85%]" data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <div className="text-sm font-medium text-violet-600 my-2">Total Running Assignment</div>
                                            <div className="className flex items-center">
                                                <div className="text-3xl font-bold text-gray-700">8</div>
                                                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                                                    <div className="text-xs bg-green-200 px-2 rounded-lg">+ 78%</div>
                                                </div>
                                            </div>
                                            <div className="w-full h-1 rounded bg-gray-300 my-1">
                                                <div className="w-[78%] h-1 rounded bg-green-500"></div>
                                            </div>
                                            <div className="text-xs font-medium text-gray-400 ">Weekly Goal</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                                    <div className="flex items-center justify-start w-full">
                                        <div className="flex-col w-[85%]" data-aos="fade-left"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <div className="text-sm font-medium text-violet-600 my-2">Total Pending Assignment</div>
                                            <div className="className flex items-center">
                                                <div className="text-3xl font-bold text-gray-700">4</div>
                                                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                                                    <div className="text-xs bg-red-200 px-2 rounded-lg">50%</div>
                                                </div>
                                            </div>
                                            <div className="w-full h-1 rounded bg-gray-300 my-1">
                                                <div className="w-[33%] h-1 rounded bg-red-500"></div>
                                            </div>
                                            <div className="text-xs font-medium text-gray-400 ">Daily Goal</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col lg:flex-row ">
                                <div className="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
                                    <div className="flex items-center justify-start w-full">
                                        <div className="flex-col w-[85%]" data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <div className="text-sm font-medium text-violet-600 my-2">Total Complete Assignment</div>
                                            <div className="className flex items-center">
                                                <div className="text-3xl font-bold text-gray-700">7</div>
                                                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                                                    <div className="text-xs bg-green-200 px-2 rounded-lg">+ 54%</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-4 ">
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[20%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Mon</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[60%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Tue</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[70%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Wed</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[44%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Thu</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[87%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Fri</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[55%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Sat</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[34%] w-6 rounded-tr rounded-tl bg-green-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Sun</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
                                    <div className="flex items-center justify-start w-full">
                                        <div className="flex-col w-[85%]" data-aos="fade-left"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <div className="text-sm font-medium text-violet-600 my-2">Weekly Users</div>
                                            <div className="className flex items-center">
                                                <div className="text-3xl font-bold text-gray-700">16,568</div>
                                                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                                                    <div className="text-xs bg-red-200 px-2 rounded-lg">- 8.7%</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-4 ">
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[79%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Mon</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[20%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Tue</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[30%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Wed</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[44%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Thu</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[67%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Fri</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[25%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Sat</div>
                                                </div>
                                                <div className="flex-col">
                                                    <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                                                        <div className="h-[64%] w-6 rounded-tr rounded-tl bg-violet-300"></div>
                                                    </div>
                                                    <div className="text-xs font-medium ml-2 text-gray-500">Sun</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <script src="https://cdn.tailwindcss.com"></script>

                </div>
            </div>
            <div>
                <div>
                    <div className="flex justify-center ">
                        <nav className="self-center w-full max-w-7xl  ">
                            <div className="flex flex-col lg:flex-row justify-around items-center border-b-2">
                                <div className=" text-center text-base pr-5  inline-flex"> <a href="#"
                                    className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i
                                        className="fa fa-twitter"></i></a> <a href="#"
                                            className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                className="fa fa-instagram"></i></a> <a href="#"
                                                    className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                        className="fa fa-facebook"></i></a> <a href="#"
                                                            className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                className="fa fa-google"></i></a> <a href="#"
                                                                    className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                        className="fa fa-linkedin"></i></a> </div>
                            </div>
                        </nav>
                    </div>
                    <div className="flex justify-center  ">
                        <div className="flex flex-col items-center justify-center">

                            <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                                <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                                    <div className="text-3xl md:text-7xl font-bold ">
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

                                    <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl  " data-aos="fade-up" data-aos-duration="3000">
                                        <img src="https://i.ibb.co/LtGt8M5/p.png

                                    
                                                            " alt="" className="" />
                                    </div>
                                    <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                        <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl " data-aos="fade-up" data-aos-duration="3000">
                                            <img src="https://i.ibb.co/m5XnHqV/f.png

                                    
                                                                " alt="" className="" />
                                        </div>
                                        <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl " data-aos="fade-up" data-aos-duration="3000">
                                            <img src="https://i.ibb.co/myt98ZC/gg.png

                                    
                                                                " alt="" className="" />
                                        </div>
                                    </div>
                                    <div className="lg:w-60 w-64 h-74  overflow-hidden rounded-xl " data-aos="fade-up" data-aos-duration="3000">
                                        <img src="https://i.ibb.co/QX421yD/421067-PE0-BR7-748.jpg
                                    
                                                            " alt="" className="" />
                                    </div>
                                    <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                        <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl " data-aos="fade-up" data-aos-duration="3000">
                                            <img src="https://i.ibb.co/X70ZWvz/d.png
                                    
                                                                " alt="" className="" />
                                        </div>
                                        <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl " data-aos="fade-up" data-aos-duration="3000">
                                            <img src="https://i.ibb.co/88yZZY1/grrrr.png
                                    
                                                                " alt="" className="" />
                                        </div>
                                    </div>
                                    <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl " data-aos="fade-up" data-aos-duration="3000">
                                        <img src="https://i.ibb.co/9ZSsZG9/jj.png
                                    
                                                            " alt="" className="" />
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>

                </div>
            </div>
        </div>
    );
};

export default Picgallery;
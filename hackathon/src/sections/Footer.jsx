import React from "react";

const Footer = () => {
    return (
        <section className="py-10 sm:pt-16 lg:pt-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/photo_5775934125344146798_y.jpg')" }}>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        {/* Content */}
                        <p className="text-base leading-relaxed text-white mt-7">
                        Thank you for visiting our website! We appreciate your time and interest. If you have any questions or need further assistance, feel free to reach out to us !

                            </p>
                        
                        <ul className="flex items-center space-x-3 mt-9">
                            {/* Social Icons */}
                        </ul>
                    </div>
                    
                    <div className="col-span-4 md:col-span-3 lg:col-span-4 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-secondary uppercase">Contact us</p>
                        
                        <form action="#" method="POST" className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-main-bg caret-secondary" />
                            </div>

                            <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-purple-600">contact us</button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />
            </div>
        </section>
    );
};

export default Footer;

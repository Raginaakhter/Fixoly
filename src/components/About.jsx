import React from 'react';

const About = () => {
    return (
        <div>
            <section className="py-10  bg-cyan-700 sm:py-16 lg:py-5 mt-0.5 mb-0.5 ">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                        <div className="pr-12 sm:pr-0">
                            <div className="relative max-w-xs mb-12">
                                <img
                                    className="object-bottom rounded-md h-80 w-7xl"
                                    src="https://img.freepik.com/premium-photo/portrait-handyman-uniform-showing-blank-mobile-phone-yellow-background_93675-169824.jpg?ga=GA1.1.840742692.1748253951&semt=ais_hybrid&w=740"
                                    alt=""
                                />
                                <img
                                    className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                                    src="https://img.freepik.com/free-photo/man-sitting-his-work-table-with-electronics_23-2148254089.jpg?ga=GA1.1.840742692.1748253951&semt=ais_hybrid&w=740"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h1 className='text-amber-700 text-3xl font-semibold'>
                                    About More Info 
                                </h1>
                            </div>
                            <h2 className="text-2xl font-bold leading-tight text-amber-50 sm:text-4xl lg:text-5xl">
                               Smartphone Troubles? We’ll Fix It — Fast & Hassle-Free!
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-amber-50">
                             From broken screens to stubborn charging ports — our mobile repair experts are just a click away. No more long waits or hidden charges. We offer transparent, trusted, and on-demand phone repair services — at your home or our service center.
                            </p>
                            <button className="btn btn-active btn-secondary">Get more Info</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

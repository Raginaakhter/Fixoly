import React from 'react';

const HowtoFind = () => {
    return (
        <div>

            <section className="py- bg-gradient-to-r bg-cyan-700 from-fuchsia-600 sm:py-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
                       <div>
                         <h4 className="text-2xl font-semibold text-white">
                            We are Open : Monday to Friday <br />
                            Have a Qusetion ? : 01613990**** <br />
                           Address: Liza Street,Rangpur.
                           
                        </h4>
                        
                       </div>

                        <a
                            href="#"
                            title="Get instant access"
                            className="inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-amber-50 font-semibold text transition-all duration-200  bg-cyan-700 rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-yellow-400 focus:bg-yellow-400"
                            role="button"
                        >
                            Get instant access
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowtoFind;
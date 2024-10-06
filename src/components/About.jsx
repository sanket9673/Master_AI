import React from 'react';

const About = () => {
    return (
        <div className='relative mt-20 border-neutral-800 min-h-[800px]'>
            <div className="text-center">
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
                    Welcome to <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>MasterAI</span> Us
                </h2>
            </div>    
            <div className="flex flex-col items-center mt-10 lg:mt-20">
                <p className="text-lg mb-4 text-center max-w-2xl">
                    Welcome to MasterAI! We are dedicated to providing cutting-edge AI solutions to empower individuals and businesses alike. Our mission is to simplify technology and make it accessible to everyone.
                </p>
                <p className="text-lg mb-4 text-center max-w-2xl">
                    With a team of experienced professionals, we focus on innovation and customer satisfaction. We believe in the transformative power of AI and its potential to revolutionize the way we live and work.
                </p>
                <p className="text-lg mb-4 text-center max-w-2xl">
                    Join us on this exciting journey to harness the power of artificial intelligence for a better future!
                </p>
            </div>
        </div>
    );
};

export default About;

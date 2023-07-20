import React from 'react';
import banner from '../../src/assets/images/more/3.png'
const Banner = () => {
    return (
        <div>
            <div className="hero h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/9HVXDGg/3.png)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className=" text-neutral-content grid grid-cols-2">
                    <div className="">
                       
                    </div>
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn rounded-none border-0 bg-[#E3B577]">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
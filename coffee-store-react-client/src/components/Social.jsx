import React from 'react';
import cup1 from '../assets/images/cups/Rectangle 9.png'
import cup2 from '../assets/images/cups/Rectangle 10.png'
import cup3 from '../assets/images/cups/Rectangle 11.png'
import cup4 from '../assets/images/cups/Rectangle 12.png'
import cup5 from '../assets/images/cups/Rectangle 13.png'
import cup6 from '../assets/images/cups/Rectangle 14.png'
import cup7 from '../assets/images/cups/Rectangle 15.png'
import cup8 from '../assets/images/cups/Rectangle 16.png'

const Social = () => {
    return (
        <div>
            <div className="">
                <div className="text-center">
                    <p>Have a Cup Of Coffee</p>
                    <h1 className='text-4xl text-bold mb-4 text-[#331A15]'>We Serve Our Best</h1>
                </div>
                <div className="grid md:grid-cols-4 gap-4 my-14 px-20">
                    <div className="">
                        <img src={cup1} alt="" />
                    </div>
                    <div className="">
                        <img src={cup2} alt="" />
                    </div>
                    <div className="">
                        <img src={cup3} alt="" />
                    </div>
                    <div className="">
                        <img src={cup4} alt="" />
                    </div>
                    <div className="">
                        <img src={cup5} alt="" />
                    </div>
                    <div className="">
                        <img src={cup6} alt="" />
                    </div>
                    <div className="">
                        <img src={cup7} alt="" />
                    </div>
                    <div className="">
                        <img src={cup8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Social;
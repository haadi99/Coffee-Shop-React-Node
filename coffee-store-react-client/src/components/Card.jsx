import React from 'react';
import logo1 from '../../src/assets/images/icons/1.png'
import logo2 from '../../src/assets/images/icons/2.png'
import logo3 from '../../src/assets/images/icons/3.png'
import logo4 from '../../src/assets/images/icons/4.png'

const Card = () => {
    return (
        <div className="bg-[#ECEAE3] grid grid-cols-4 gap-10 p-12">
            <div className="">
                <img src={logo1} className='mb-2' alt="" />
                <h4 className="">Awesome Aroma</h4>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="">
                <img src={logo2} className='mb-2' alt="" />
                <h4>High Quality</h4>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className="">
                <img src={logo3} className='mb-2' alt="" />
                <h4>Pure Grades</h4>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className="">
                <img src={logo4} className='mb-2' alt="" />
                <h4>Proper Roasting</h4>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Card;
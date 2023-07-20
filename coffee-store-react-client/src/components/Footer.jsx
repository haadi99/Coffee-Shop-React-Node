import React from 'react';
import './Footer.css'
import { FaEnvelope, FaFacebook, FaInstagram, FaMap, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="">
            <div className="foot p-5 grid grid-cols-2">
                <div className="px-16  mt-10">
                    <img src="logo.png" height="50" width="50" alt="" />
                    <h1 className='text-4xl text-bold my-3  text-[#331A15]'>Espresso Emporium</h1>
                    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex gap-4 text-3xl my-3">
                        <p className='text-[blue]'><FaFacebook></FaFacebook></p>
                        <p className='text-[hsl(350,78%,59%)]'><FaInstagram></FaInstagram></p>
                        <p className='text-[blue]'><FaTwitter></FaTwitter></p>
                        <p className='text-[red]'><FaYoutube></FaYoutube></p>
                    </div>
                    <h1 className='text-4xl text-bold mb-3  text-[#331A15]'>Get in Touch</h1>
                    <p className='flex gap-3 items-center mb-2'><FaPhone></FaPhone> 017xxxxxxxx</p>
                    <p className='flex gap-3 items-center mb-2'><FaEnvelope></FaEnvelope>test@example.com</p>
                    <p className='flex gap-3 items-center mb-2'><FaMap></FaMap>53, Reazabazar, Dhaka</p>
                    <p></p>
                </div>
                <div className="px-16 mt-10">
                    <h1 className='text-4xl text-bold mb-4  text-[#331A15]'>Connect with Us</h1>
                    <form action="">
                        <div className="form-control mb-2">
                            <input type="text" placeholder="Name" className="input" />
                        </div>
                        <div className="form-control mb-2">
                            <input type="text" placeholder="Email" className="input" />
                        </div>
                        <div className="form-control mb-5 ">
                            <textarea type="text" placeholder="Message" cols={4} className="input"></textarea>
                        </div>
                        <button className='btn rounded-full border-black bg-transparent px-5'>Send Message</button>
                    </form>
                </div>
            </div>
            <div className="last text-white p-3 text-center">
                <p>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>

    );
};

export default Footer;
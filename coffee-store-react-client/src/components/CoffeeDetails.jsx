import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from './Footer';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const {photo, name, category, supplier, test, details} = coffee;
    console.log(coffee);
    return (
        <div>
            <Navbar></Navbar>
            <a className='mt-6 flex items-center gap-2' href="/"><FaArrowLeft></FaArrowLeft> Back To Home</a>
            <div className="bg-[#F4F3F0] w-[1100px] mx-auto mt-10 py-16 mb-10 px-24 grid grid-cols-2 items-center">
                <div className="">
                    <img src={photo} alt="" />
                </div>
                <div className="">
                    <h1 className='text-3xl text-bold mb-4 text-[#331A15]'>{name}</h1>
                    <p className='pb-2'><b>Chef</b>: {supplier}</p>
                    <p className='pb-2'><b>Category: </b> {category}</p>
                    <p className='pb-2'><b>Taste:</b> {test}</p>
                    <p className='pb-2'><b>Details:</b> {details}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CoffeeDetails;
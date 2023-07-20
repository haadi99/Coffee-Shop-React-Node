import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from './Footer';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { name, _id, quantity, supplier, category, test, details, photo } = coffee
    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {
            name, quantity, supplier, test, category, details, photo
        }
        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <a className='mt-6 flex items-center gap-2' href="/"><FaArrowLeft></FaArrowLeft> Back To Home</a>
            <div className="bg-[#F4F3F0] w-[1100px] mx-auto mt-10 py-10 mb-10 px-24">
                <div className="text-center mb-10">
                    <h4 className='font-extrabold text-4xl text-bold mb-4 text-[#331A15]'>Update coffee</h4>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdateCoffee} action="">
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={name} name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={quantity} name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='test' defaultValue={test} placeholder="Test" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photo' defaultValue={photo} placeholder="Photo Url" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Coffee" className="btn btn-block mt-5 border-black bg-[#E3B577]" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateCoffee;
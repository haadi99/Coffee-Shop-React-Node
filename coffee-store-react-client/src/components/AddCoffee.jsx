import React from 'react';
import Swal from 'sweetalert2'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaArrowLeft } from 'react-icons/fa';

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {
            name, quantity, supplier, test, category, details, photo
        }
        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        console.log(newCoffee);
    }
    return (
        <div className="">
            <div className="mb-6">
                <Navbar></Navbar>
            </div>
            <a className='mt-6 flex items-center gap-2' href="/"><FaArrowLeft></FaArrowLeft> Back To Home</a>
            <div className="bg-[#F4F3F0] w-[1100px] mx-auto mt-10 py-10 mb-10 px-24">
                <div className="text-center mb-10">
                    <h4 className='font-extrabold text-4xl text-bold mb-4 text-[#331A15]'>Add coffee</h4>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee} action="">
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' placeholder="Coffee Name" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text text-lg">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='quantity' placeholder="Available Quantity" className="input w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='supplier' placeholder="Supplier Name" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text text-lg">Test</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='test' placeholder="Test" className="input w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='category' placeholder="Category" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text text-lg">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='details' placeholder="Details" className="input w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Photo Url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photo' placeholder="Photo Url" className="input" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-block mt-5 border-black bg-[#E3B577]" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCoffee;
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';

const CoffeeCard = ({ coffee , coffees ,setCoffees}) => {
console.log(coffee);
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffee/${id}`, {
                    method: 'DELETE',


                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id == id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className=''>
            <div className="card m-2 card-side p-10 bg-[#F5F4F1] bg-opacity-50 rounded-sm shadow-xl">
                <figure><img src={coffee.photo} alt="" /></figure>
                <div className="flex justify-between w-full p-4">
                    <div className="">
                        <h2 className="card-title mt-5">Name: {coffee.name}</h2>
                        <p className="mt-2">Quantity: {coffee.quantity}</p>
                        <p className="mt-2">Chef:{coffee.supplier}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group rounded-sm btn-group-vertical space-y-2">
                            <Link to={`coffee-details/${coffee._id}`} className="btn bg-[#D2B48C] text-white"><FaEye></FaEye></Link>
                            <Link to={`update-coffee/${coffee._id}`}>
                                <button className="btn bg-black text-white"><FaPen></FaPen></button>
                            </Link>

                            <button onClick={() => handleDelete(coffee._id)} className="btn bg-red-500 text-white"><FaTrash></FaTrash></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
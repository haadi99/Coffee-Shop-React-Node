import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Card from './components/Card'
import { FaCoffee, FaMugHot } from 'react-icons/fa'
import Social from './components/Social'
import Footer from './components/Footer'

function App() {
  const loadedCoffees = useLoaderData();
  console.log(loadedCoffees);
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Card></Card>
        <div className="text-center">

      </div>

      <div className=" background mt-10">
        <div className="text-center">
          <h1 className='text-4xl text-bold mb-4 text-[#331A15]'>Our Popular Products</h1>
          <button className='btn rounded-none border-black text-white bg-[#E3B577] text-center'>Add Coffee <span className='text-black'><FaCoffee></FaCoffee></span> </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 p-20">
          {
            coffees.map(coffee => <CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
      <Social></Social>
      <Footer></Footer>
    </div>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom';
import logos from '../assets/logo.png'


const Navbar = () => {
  return (
    <div>


<nav className="bg-black border-gray-200 dark:bg-black-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://final-project-fullstack.vercel.app/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logos} class="h-8" alt="TMM Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TMM</span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" class="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            
            <a href="/Login" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"><Link to="/contactUs">Contact Us</Link></a>
            <a href="/Login" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"><Link to="/login">login</Link></a>
        </div>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page"><Link to="/">Home</Link></a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline"><Link to="/AboutUs">About Us</Link></a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline"><Link to="/Saloon">Saloon</Link></a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline"><Link to="/Wagon">Wagon</Link></a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline"><Link to="/Jeep">Jeep</Link></a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

export default Navbar
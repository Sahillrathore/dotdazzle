import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='flex justify-between bg-black px-12 py-4 items-center'>
                <div className="logo text-2xl font-bold !text-yellow-400">DotDazzle</div>

                <ul className='flex gap-6'>
                    <li className='list-none text-gray-400 hover:text-gray-300 transition-colors cursor-pointer font-normal text-lg'>Services</li>
                    <li className='list-none text-gray-400 hover:text-gray-300 transition-colors cursor-pointer font-normal text-lg'>Contact</li>
                    <li className='list-none text-gray-400 hover:text-gray-300 transition-colors cursor-pointer font-normal text-lg'>Quote</li>
                    <li className='list-none text-gray-400 hover:text-gray-300 transition-colors cursor-pointer font-normal text-lg'>Portfolio</li>
                </ul>
                
                <button className='px-6 py-2 rounded-full hover:bg-transparent border border-transparent hover:border-yellow-400 transition-colors bg-yellow-400 text-white'>
                    Contact Us
                </button>
            </div>
        </header>
    )
}

export default Header
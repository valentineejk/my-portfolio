import React from 'react'
import prof from '../img/PROF.PNG';

const Hero=() => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center sm:py-16 pt-16' >
            <div className='self-center'>
                <h1 className='text-3xl font-Bungee2'>
                    Hi,

                </h1>
                <p className='text-2xl font-Bungee2'>
                    I'm Valenitne,
                </p>
                <p className='text-2xl font-Bungee2'>
                    Software Developer.
                </p>
                <p className='text-xs font-Bungee2 font-light '>
                    Front-end Engineer | Swift | Flutter
                </p>


            </div>


            <div> <img src={prof} alt="profile" /></div>

        </div>

    )
}

export default Hero


// grid grid-cols-3 gap-4 justify-items-center 
// <div className='py-6 W-24 '>
                //     <button href="google.com" class=" rounded-full bg-stone-400 shadow-lg shadow-gray-500/50  text-sm font-Bungee2  px-3">Contact Me</button>
                // </div>
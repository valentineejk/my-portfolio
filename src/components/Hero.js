import React from 'react'
import prof from '../img/PROF.PNG';

const Hero=() => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center sm:py-16' >
            <div className='self-center'>
                <h1 className='text-3xl font-Bungee'>
                    Hi,

                </h1>
                <p className='text-2xl font-Bungee2'>
                    I'm Valenitne,
                </p>
                <p className='text-2xl font-Bungee2'>
                    Software Developer.
                </p>
                <p className='text-xs font-Bungee2'>
                    Front-end Engineer | Swift | Flutter
                </p>
            </div>


            <div> <img src={prof} alt="profile" /></div>

        </div>

    )
}

export default Hero


// grid grid-cols-3 gap-4 justify-items-center
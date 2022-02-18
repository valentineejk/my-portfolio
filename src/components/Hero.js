import React from 'react'
import prof from '../img/PROF.PNG';

const Hero=() => {
    return (
        <div className='grid grid-cols-2 gap-4 justify-items-center' >
            <div className='self-center'>
                <p className='text-3xl font-Bungee'>
                    Hello,
                </p>
            </div>
            <div> <img src={prof} alt="profile" /></div>

        </div>

    )
}

export default Hero


// grid grid-cols-3 gap-4 justify-items-center
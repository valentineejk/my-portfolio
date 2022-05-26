import React from 'react'
// import Swift from '../img/swift.png';
import { ReactComponent as Swift } from '../img/swift.svg';
import { ReactComponent as Reactj } from '../img/react.svg';
import { ReactComponent as Figma } from '../img/figma.svg';
import { ReactComponent as Firebee } from '../img/firebee.svg';
// import {ReactComponent as Flutte} from '../img/flutter.svg';
import { ReactComponent as Tailwin } from '../img/Tailwin.svg';
import { ReactComponent as Nexj } from '../img/nxj.svg';




const Technicals = () => {
    return (
        <div className='pb-6 sm:pb-28'>



            <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6  lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center font-Bungee2 sm:py-8">Tech Stack</h2>

                </div>
                <div className=' grid sm:grid-cols-5 grid-cols-3  gap-8 justify-items-center  h-16 sm:py-8  py-16' >
                    <Reactj className="sm:w-28 sm:h-28 w-16 h-16  rounded-full shadow-inner " />
                    <Nexj className=" sm:w-28 sm:h-28 w-16 h-16  rounded-full shadow-inner " />

                    <Tailwin className=" sm:w-28 sm:h-28 w-16 h-16  rounded-full shadow-inner " />
                    {/* <Firebee className=" sm:w-28 sm:h-28 w-16 h-16  rounded-full shadow-inner " /> */ }
                    <Swift className=" sm:w-28 sm:h-28 w-16 h-16  rounded-full shadow-inner " />


                    {/* <Flutte className="sm:w-28 sm:h-28 w-16 h-16  rounded-full shadow-inner " /> */ }

                    {/* <Nodejee className=" sm:w-28 sm:h-28 w-16 h-16  rounded-full shadow-inner " /> */ }
                    <Figma className=" sm:w-28 sm:h-28 w-16 h-16  rounded-full shadow-inner " />




                </div>
            </div>

        </div>
    )
}

export default Technicals
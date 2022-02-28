import React from 'react'
// import swift from '../img/swift.png';
import {ReactComponent as Swift} from '../img/swift.svg';
import {ReactComponent as Flutter} from '../img/flutter.svg';
import {ReactComponent as Reactj} from '../img/react.svg';
import {ReactComponent as Figma} from '../img/figma.svg';
import {ReactComponent as Firebae} from '../img/fireb.svg';





const Technicals=() => {
    return (
        <div className="bg-white ">
            <div className="max-w-2xl mx-auto py-24 px-4  sm:px-6  lg:max-w-7xl ">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center font-Bungee ">Tech Stack</h2>


                </div>

                <div className=' grid grid-cols-4 gap-2 h-16 sm:py-16 py-16' >
                    <Swift className=" sm:w-24 sm:h-24  w-24 h-14 rounded-full shadow-inner hover:shadow-xl " />
                    <Flutter className="sm:w-24 sm:h-24 w-24 h-14  rounded-full shadow-inner hover:shadow-xl" />
                    <Reactj className="sm:w-24 sm:h-24 w-24 h-14  rounded-full shadow-inner hover:shadow-xl" />
                    <Figma className=" sm:w-24 sm:h-24 w-24 h-14  rounded-full shadow-inner hover:shadow-xl" />

                </div>
            </div>

        </div>
    )
}

export default Technicals
import React from 'react'
const callouts = [

    {
        name: 'GoalSetter App',
        description: 'React | Mongodb | Redux',
        imageSrc: 'https://i.ibb.co/N7Wrm5V/Goal-Setter-App.png',
        imageAlt: 'Goal App',
        href: 'https://goalsetterapi1.herokuapp.com/',
    },
    {
        name: 'Nextjs API with Mongodb',
        description: 'Nextjs | Mongodb | APIs',
        imageSrc: 'https://i.ibb.co/nsrkL1d/localhost-3000.png',
        imageAlt: 'Nextjs',
        href: 'https://chillspot-psi.vercel.app/',
    },
    {
        name: 'Ecommerce App',
        description: 'Flutter | Firebase | Woocommerce',
        imageSrc: 'https://i.ibb.co/gwJLx7h/48411-E71-E9-F7-4-B59-87-E5-83-BD14-ADE8-B4.png',
        imageAlt: 'Ecommerce app App',
        href: 'https://apps.apple.com/ng/app/miskay/id1514919318',
    },

]
const Projects = () => {
    return (

        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Portfolio
                </h1>

                {/* <p className="mt-4 text-center text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                </p> */}
                { callouts.map((callout) => (


                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <img className="object-cover w-full rounded-lg h-96 "
                                src={ callout.imageSrc }
                                alt="" />
                            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">{ callout.name }</h2>
                            <p className="mt-2 text-lg tracking-wider text-black-500 uppercase ">Website</p>
                        </div>
                    </div>

                ),
                ) }





            </div>
        </section>


        // <div >

        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        //         <div className="max-w-2xl mx-auto    lg:max-w-none">
        //             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center sm:pb-6 pb-6 py-16 font-Bungee2">Projects</h2>

        //             <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 sm:pb-10 pb-8  ">
        //                 { callouts.map((callout) => (



        //                     <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        //                         <div>
        //                             <img class="object-cover w-full rounded-lg h-96 "
        //                                 src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
        //                                 alt="" />
        //                             <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Best website
        //                                 collections</h2>
        //                             <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
        //                         </div>
        //                     </div>
        //                 ),
        //                 ) }
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Projects
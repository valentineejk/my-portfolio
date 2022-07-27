import React from 'react'
const callouts = [
  
    {
        name: 'GoalSetter App',
        description: 'React | Mongodb | Redux',
        imageSrc: 'https://i.ibb.co/N7Wrm5V/Goal-Setter-App.png',
        imageAlt: 'Goal App',
        href: 'https://goalsetterapi1.herokuapp.com/',
    },
 

]
const Projects = () => {
    return (
        <div >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-2xl mx-auto    lg:max-w-none">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center sm:pb-6 pb-6 py-16 font-Bungee2">Projects</h2>

                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 sm:pb-10 pb-8  ">
                        { callouts.map((callout) => (
                            <div key={ callout.name } className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 ">
                                    <img
                                        src={ callout.imageSrc }
                                        alt={ callout.imageAlt }
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <h3 className="mt-6 font-light text-sm text-gray-800 font-Bungee2">
                                    <a href={ callout.href }>
                                        <span className="absolute inset-0" />
                                        { callout.name }
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900 font-Bungee2 ">{ callout.description }</p>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
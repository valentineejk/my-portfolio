import React from 'react'
const callouts = [
    {
        name: 'Collectio-api',
        description: 'Nextjs Restaurants Api',
        imageSrc: 'https://i.ibb.co/ws7yfnR/Collectio-App.png',
        imageAlt: 'collectioapi',
        href: 'https://collectio-api.vercel.app/',
    },
    {
        name: 'Random Starwars Characters',
        description: 'React | Tailwind CSS | TypeScript',
        imageSrc: 'https://i.ibb.co/pPS95xB/React-App.png',
        imageAlt: 'Random Starwars Characters',
        href: 'https://starwarsnames-app.vercel.app/',
    },
    {
        name: 'Movie Land',
        description: 'React | TypeScript',
        imageSrc: 'https://i.ibb.co/y0vXNFh/React-App-1.png',
        imageAlt: 'Movies',
        href: 'https://sparkling-zuccutto-a81395.netlify.app',
    },
    {
        name: 'Miskay Boutique eCommerce Store',
        description: 'WordPress | WooCommerce',
        imageSrc: 'https://i.ibb.co/t2KW9Kp/Screenshot-2022-04-09-at-18-08-54.png',
        imageAlt: 'Movies',
        href: 'https://miskayboutique.com/',
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
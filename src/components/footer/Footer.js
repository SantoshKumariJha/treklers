import React from 'react'
function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-black">
            <div className="px-8 sm:px-32 md:px-32 lg:px-44 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <div className='w-16 h-16 border border-1 bg-[url("https://th.bing.com/th/id/OIP.qyT7rkAlpvPKLk89YDrh3wHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7")] bg-cover bg-center'>
                        </div>
                        <span className="ml-3 text-xl text-white">Treklers</span>
                    </a>
                    <p className="mt-2 text-sm text-white">Visit Help Center</p>
                </div>
                <div className="flex-grow flex flex-wrap mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="md:w-1/2 lg:w-1/4 w-full px-4 text-center">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">Company</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">About us</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Our offerings</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Newsroom</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Investors</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Blog</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Careers</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Gift cards</a>
                            </li>
                        </nav>
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 w-full px-4 text-center">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">Products</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Ride</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Drive</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Deliver</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Treklers for Business</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Treklers Freight</a>
                            </li>
                        </nav>
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 w-full px-4 text-center">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">Global citizenship</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Safety</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Diversity and Inclusion</a>
                            </li>
                        </nav>
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 w-full px-4 text-center">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">Travel</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Airports</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="text-gray-400 hover:text-gray-200">Cities</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="px-8 sm:px-32 md:px-32 lg:px-44 pb-16 pt-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">

                    {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-200">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-16 text-gray-200">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-16 text-gray-200">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-16 text-gray-200">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span> */}
                </div>
                
                <div className="flex-grow flex flex-wrap lg:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center sm:justify-center md:justify-end">
                    <div className="px-4">
                        <button className="inline-flex items-center bg-black font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0"><svg className='mr-2' width="16" height="16" viewBox="0 0 24 24" fill="none"><title>Globe</title><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5zM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1zm1.9-6.1l-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4zM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12zm3.5 6.6l1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4z" fill="currentColor"></path></svg>English
                        </button>
                        <button className="inline-flex items-center bg-black font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0"><svg className='mr-2' width="16" height="16" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4zM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"></path></svg>Delhi NCR
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-500">
                <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-200 text-sm text-center sm:text-left">© 2023 Treklers —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-200 ml-1" target="_blank">@Treklers.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="ml-3 text-white">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">Privacy</h2>
                        </a>
                        <a className="ml-3 text-white">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">Accessibility</h2>
                        </a>
                        <a className="ml-3 text-white">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">Terms</h2>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
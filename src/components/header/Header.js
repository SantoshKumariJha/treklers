import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

export default function Header(props) {

    function DriverLogin(){
        props.setName("Driver Login")
    }

    function EmployerLogin(){
        props.setName("Employer Login")
    }

    return (
        <>
            <header className="text-white body-font">
                <div className="mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-black pr-16">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-2xl text-white">
                            <Link className=' ml-3 font-bold' to="/homecontent">Treklers</Link>
                        </span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex items-center bg-black font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0">
                                    Company
                                    <ChevronDownIcon
                                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 z-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                >
                                                    About us
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                >
                                                    Our offerings
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                >
                                                    How Treklers works
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                >
                                                    Global citizenship
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                >
                                                    Newsroom
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                >
                                                    Investor relations
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                >
                                                    Blog
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                >
                                                    Careers
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <button className="inline-flex items-center bg-black font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0">Safety
                        </button>
                        <button className="inline-flex items-center bg-black font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0">Help
                        </button>
                    </nav>
                    <nav className="md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-end">
                        <button className="inline-flex items-center bg-black font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5zM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1zm1.9-6.1l-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4zM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12zm3.5 6.6l1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4z" fill="currentColor"></path></svg><span className='pl-2'>EN</span>
                        </button>
                        <button onClick={DriverLogin} className="inline-flex items-center bg-gray-700 font-semibold border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0">
                            <Link className='nav-link'>Driver login</Link>
                        </button>
                        <button onClick={EmployerLogin} className="inline-flex items-center bg-white font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded-full text-black mt-4 md:mt-0">
                            <Link to="/employerdetails">Employer login</Link>
                        </button>
                    </nav>
                </div>
                <Toaster/>
            </header>
        </>
    )
}
function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

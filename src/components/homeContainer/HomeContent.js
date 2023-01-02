import React, { useState } from 'react'
import { useFormik } from 'formik';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Login } from '../loginPage/Login';

function HomeContent(props) {

    const [name, setName] = useState("Driver Login");
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <Header setName={setName} />
            <div className='w-full min-h-screen bg-[url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_805/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png")] bg-cover'>
                <div className='p-16 pl-16 sm:px-48 md:px-24 lg:pl-48'>
                    <div className='innerContainer'>
                        <div className='w-full'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 h-96'>
                                <div className='bg-white'>
                                    <Login name={name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-80'>
                <div className='w-full h-full bg-[url("https://www.uber-assets.com/image/upload/v1613106985/assets/0e/47aa71-35cb-459a-a975-78c61ea300e2/original/HP-U4B-NYC-bkg.png")] bg-cover bg-center'>
                    <div className='px-8 sm:px-32 md:px-32 lg:px-44'>
                        <div className='innerContainer'>
                            <h2 className='text-4xl py-8 font-bold'>Treklers for Business</h2>
                            <div className='grid grid-rows gap-4 w-full'>
                                <div className='grid md:grid-cols-2 gap-4 pb-8'>
                                    Transform the way your company moves and feeds its people.
                                </div>
                            </div>
                            <button className="rounded bg-black text-white font-bold px-8 py-2">See how</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='px-8 sm:px-32 md:px-32'>
                <div className='innerContainer py-16 pb-0'>
                    <h2 className='text-4xl font-bold mb-8 '>Ride with Treklers
                    </h2>
                    <div className='grid grid-rows gap-4 w-full'>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 p-8'>
                                <div className='flex justify-center'>
                                    <div className='w-36 h-36 bg-[url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png")] bg-cover bg-center'></div>
                                </div>
                                <div>
                                    <div className='text-2xl font-bold'>Treklers Auto</div>
                                    <p className='pt-2'>Get affordable Treklers Auto rides with no haggling. Request Treklers Auto and ride comfortably around your city.</p>
                                </div>
                            </div>
                            <div className='grid  sm:grid-cols-1 lg:grid-cols-2 gap-4 p-8'>
                                <div className='flex justify-center'>
                                    <div className='w-36 h-36 bg-[url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png")] bg-cover bg-center'> </div>
                                </div>
                                <div>
                                    <div className='text-2xl font-bold'>Treklers Moto</div>
                                    <p className='pt-2'>Get affordable bike rides at your doorstep. Skip the crowd and zip through traffic with Treklers Moto.</p>
                                </div>                            </div>
                            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 p-8'>
                                <div className='flex justify-center'>
                                    <div className='w-36 h-36 bg-[url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png")] bg-cover bg-center'> </div>
                                </div>
                                <div>
                                    <div className='text-2xl font-bold'>Treklers Rentals</div>
                                    <p className='pt-2'>Book Rentals to save time with one car and driver for your multi-stop trips.</p>
                                </div>                            </div>
                            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 p-8'>
                                <div className='flex justify-center'>
                                    <div className='w-36 h-36 bg-[url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png")] bg-cover bg-center'> </div>
                                </div>
                                <div>
                                    <div className='text-2xl font-bold'>Treklers Intercity</div>
                                    <p className='pt-2'>Book Intercity to head outstation anytime in convenient and affordable cars.</p>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-8 sm:px-32 md:px-32 lg:px-44 pt-8 pb-16'>
                <div className='innerContainer pb-8'>
                    <h2 className='text-4xl font-bold mb-8'>Focused on safety, wherever you go</h2>
                    <div className='grid grid-rows gap-4 w-full'>
                        <div className='grid sm:grid-cols-2 gap-9'>
                            <div className='bg-orange-500'>
                                <div className='w-full h-96 bg-[url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png")] bg-cover bg-center'> </div>
                            </div>
                            <div className='bg-orange-500'>
                                <div className='w-full h-96 bg-[url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png")] bg-cover bg-center'> </div>
                            </div>


                            <div>
                                <div className='text-2xl font-bold mb-2'>Our commitment to your safety</div>
                                <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                            </div>
                            <div>
                                <div className='text-2xl font-bold ml-4 mb-2'>Setting 10,000+ cities in motion
                                </div>
                                <p className='ml-4'>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>

                            </div>
                            <div className=''>
                                <div className='grid grid-rows gap-4'>
                                    <span className='md:grid-cols-2 relative font-semibold underline decoration-slate-300 underline-offset-8 before:content[""] before:h-0.5 before:w-0 before:absolute before:bg-black before:left-0 before:-bottom-1.5 before:hover:w-full before:visited:transition before:duration-1000 before:ease-in-out'>Read about our Community Guidelines</span>
                                    <span className='md:grid-cols-2 relative font-semibold underline decoration-slate-300 underline-offset-8 before:content[""] before:h-0.5 before:w-0 before:absolute before:bg-black before:left-0 before:-bottom-1.5 before:hover:w-full before:visited:transition before:duration-1000 before:ease-in-out'>See all safety features </span>

                                </div>
                            </div>
                            <div className='sm:grid-cols-2'>
                                <span className='relative font-semibold underline decoration-slate-300 underline-offset-8 before:content[""] before:h-0.5 before:w-0 before:absolute before:bg-black before:left-0 before:-bottom-1.5 before:hover:w-full before:visited:transition before:duration-1000 before:ease-in-out	ml-4'>View all cities </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='innerContainer pt-8'>
                    <div className='grid grid-rows gap-4 w-full'>
                        <div className='grid md:grid-cols-2 gap-4 p-8 lg:grid-cols-3 p-0'>
                            <div>
                                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg" alt="Multiple people" role="presentation" aria-hidden="true" className="css-kGIRRZ" />
                                <h2 className='text-xl font-semibold py-4'>About us</h2>
                                <p>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
                                <div className='mt-8'>
                                    <span className='font-semibold pr-8 underline decoration-slate-300 hover:decoration-black underline-offset-8'>Read about our Community Guidelines</span>
                                </div>
                            </div>
                            <div>
                                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg" alt="Document" role="presentation" aria-hidden="true" className="css-kGIRRZ" />
                                <h2 className='text-xl font-semibold py-4'>Newsroom</h2>
                                <p>See announcements about our latest releases, initiatives, and partnerships.</p>
                                <div className='mt-8'>
                                    <span className='font-semibold pr-8 underline decoration-slate-300 hover:decoration-black underline-offset-8'>Read about our Community Guidelines</span>
                                </div>
                            </div>
                            <div>
                                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg" alt="Home" role="presentation" aria-hidden="true" className="css-kGIRRZ" />
                                <h2 className='text-xl font-semibold py-4'>Global citizenship</h2>
                                <p>Read about our commitment to making a positive impact in the cities we serve.</p>
                                <div className='mt-8'>
                                    <span className='font-semibold pr-8 underline decoration-slate-300 hover:decoration-black underline-offset-8'>Read about our Community Guidelines</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-8 sm:px-32 md:px-32 lg:px-44 bg-gray-200 py-16'>
                <div className='innerContainer'>
                    <h2 className='mb-8 text-4xl font-bold'>There’s more to love in the apps
                    </h2>
                    <div className='grid grid-rows gap-4 w-full'>
                        <div className='grid md:grid-cols-2 gap-16'>
                            <div className='bg-white'>
                                <div className='grid grid-cols-1 text-center p-8'>
                                    <div className='flex justify-center'>
                                        <div className='w-32 h-32 mb-4 bg-[url("https://th.bing.com/th/id/OIP.qyT7rkAlpvPKLk89YDrh3wHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7")] bg-cover bg-center'></div>
                                    </div>
                                    <div className='text-2xl'>Download the Driver app</div>
                                </div>
                            </div>
                            <div className='bg-white'>
                                <div className='grid grid-cols-1 text-center p-8'>
                                    <div className='flex justify-center'>
                                        <div className='w-32 h-32 mb-4 bg-[url("https://th.bing.com/th/id/OIP.qyT7rkAlpvPKLk89YDrh3wHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7")] bg-cover bg-center'></div>
                                    </div>
                                    <div className='text-2xl'>Download the Treklers app
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomeContent
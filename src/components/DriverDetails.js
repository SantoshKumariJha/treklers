import React from 'react'
import Header from './header/Header'
import { Leftbar } from './sidebar/Leftbar'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from './footer/Footer';
import { useForm, Controller, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const DriverDetails = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }

    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            imageUrl: "",
            mobileNo: "",
            avgRating: "",
        }
    });

    return (
        <>
            <Header />
            <div className='grid lg:grid-cols-6'>
                <Leftbar />
                <Helmet>
                    <title>Driver List - Treklers - Admin</title>
                    <meta name="description" content="Login page" />
                </Helmet>
                <div className='p-8 lg:col-span-5'>
                    <div className="col-md-12">
                    <div className="table-responsive">
                            <div className='p-4 grid grid-cols-2 pb-8'>
                                <div><span className='text-2xl font-bold'>Driver Details</span>
                                    <span className="font-bold p-4">
                                        <Link to="/">
                                            <i /> Home
                                        </Link>
                                    </span></div>
                                <div className="col-auto float-end ml-auto">
                                </div>
                            </div>
                            <form
                                onSubmit={handleSubmit((data) => {
                                    alert(JSON.stringify(data));
                                })}
                            >
                                <div className='grid grid-cols-2 gap-8 gap-y-4'>
                                    <div>
                                        <label>First Name</label>
                                        <input {...register("firstName", { required: true, })} />
                                        {errors.firstName && <p>First Name field is required</p>}
                                    </div>


                                    <div>
                                        <label>Last Name</label>
                                        <input {...register("lastName", { required: true, })} />
                                        {errors.lastName && <p>Last Name field is required</p>}
                                    </div>



                                    <div>
                                        <label>Email</label>
                                        <input type="email"
                                            {...register("email", { required: true, })}
                                        />
                                        {errors.email && <p>Email field is required</p>}

                                    </div>


                                    <div>
                                        <label>Gender</label>
                                        <input type="string"
                                            {...register("gender", { required: true, })}
                                        />
                                        {errors.gender && <p>Gender field is required</p>}
                                    </div>

                                    <div>
                                        <label>Image Url</label>
                                        <input
                                            {...register("imageUrl", { required: true, })}
                                        />
                                        {errors.imageUrl && <p>Image Url is required</p>}

                                    </div>
                                    <div>
                                        <label>Mobile Number</label>
                                        <input type="number"
                                            {...register("mobileNo", { required: true, maxLength: 10,  })}
                                        />
                                        {errors.mobileNo && <p>Mobile Number is required</p>}
                                    </div>
                                    <div> <label>Avg Rating</label>
                                        <input type="number"
                                            {...register("avgRating", { required: true, maxLength: 10 })}
                                        />
                                        {errors.avgRating && <p>Avg Rating field is required</p>}</div>
                                </div>

                                <div>
                                <input className='w-auto m-auto mt-8' type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default DriverDetails
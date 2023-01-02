import React from 'react'
import { Login } from './loginPage/Login';
import { Leftbar } from './sidebar/Leftbar';
import { Link } from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';



function Profile() {
    return (
        <>
            <Header />
            <div className='grid lg:grid-cols-6'>
                <Leftbar />
                <div className='p-8 lg:col-span-5'>
                    <div>
                        <div className='font-bold text-2xl'>Driver List</div>
                        A user profile is a collection of settings and information associated with a user. It can be defined as the explicit digital representation of the identity of the user with respect to the operating environment, which could be operating systems, software applications or websites.                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Profile;
import React from 'react'
import { Login } from './loginPage/Login';
import { Leftbar } from '../components/sidebar/Leftbar';
import { Link } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';



function Payment() {
    return (
        <>
            <Header />
            <div className='grid lg:grid-cols-6'>
                <Leftbar />
                <div className='p-8 lg:col-span-5'>
                    <div>
                        <div className='font-bold text-2xl'>Payment</div>
                    Payment is the transfer of money or goods and services in exchange for a product or service. Payments are typically made after the terms have been agreed upon by all parties involved. However, payment may be required before, during
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Payment;
import React from 'react'
import { Leftbar } from '../components/sidebar/Leftbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
// import { Table } from "antd";
// import "antd/dist/antd.css";



function LoginScreen() {

    return (
        <>
            <Header />
            <div className='grid lg:grid-cols-6'>
                <Leftbar />
                <div className='p-8 lg:col-span-5'>
                    <div className='text-2xl font-bold'> Dashboard Page</div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default LoginScreen;
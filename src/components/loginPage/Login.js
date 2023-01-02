import React, { useContext, useEffect, useState } from "react";
import 'tw-elements';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { axiosInstance } from "../../base/api/axios.util";
import { URLConstants } from "../../base/api/url.constants";
import { useAuth } from "../../base/hooks/useAuth.js";
import Loader from "react-loader";

let eMail = "";

const schemaLogIn = yup.object({
    email: yup
        .string()
        .required("Email is required")
        .trim(),
    password: yup.string().required("Password is required").trim(),
});
const schemaEmail = yup.object({
    email: yup
        .string()
        .matches("Email is required")
        .required("Email is required")
        .trim(),
});
const schemaOtp = yup.object({
    otp: yup.string().required("Otp is required").trim(),
});

const schemaResetPassword = yup
    .object({
        password: yup
            .string()
            .min(6, "Password must be at 6 char long")

            .required("Password is required")
            .trim(),

        repeatPassword: yup.string().required("ConfirmPassword is required").trim(),
        repeatPassword: yup
            .string()
            .required("Password is mendatory")
            .oneOf([yup.ref("password")], "Passwords does not match"),
    })
    .required();

export const Login = (props) => {
    const [eye, seteye] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loaded, setLoaded] = useState(true);
    // const history = useHistory();
    const { login } = useAuth();
    const [step1, setstep1] = useState(true);
    const [step2, setstep2] = useState(false);
    const [step3, setstep3] = useState(false);
    const [messagePopUp, setMessagePopUp] = useState("");


    const {
        handleSubmit: handleLogIn,
        control: controlLogIn,
        setError,
        clearErrors,
        setValue,
        formState: { errors: errorsLogIn },
    } = useForm({
        resolver: yupResolver(schemaLogIn),
    });
    const {
        handleSubmit: handleEmail,
        control: controlEmail,
        formState: { errors: errorsEmail },
    } = useForm({
        resolver: yupResolver(schemaEmail),
    });
    const {
        handleSubmit: handleOtp,
        control: controlOtp,
        formState: { errors: errorsOtp },
    } = useForm({
        resolver: yupResolver(schemaOtp),
    });
    const {
        handleSubmit: handleResetPassword,
        control: controlResetPassword,
        formState: { errors: errorsResetPassword },
    } = useForm({
        resolver: yupResolver(schemaResetPassword),
    });

    const onSubmitLogIn = (data) => {
        setLoaded(false);
        login({
            email: data.email,
            password: data.password,
        })
            .then((response) => {
                console.log("response from authenticaation", response.data);
                setLoaded(true);
                // history.push("/AdminPage");
            })
            .catch((errorMsg) => {
                setLoaded(true);
                setError("password", {
                    message: errorMsg,
                });
            });
    };

    function onSubmitEmail(data) {
        console.log(data);
        eMail = data.email;
        console.log("eMail", eMail);
        axiosInstance
            .post(URLConstants.sendVerificationEmail(), {
                userId: data.email,
            })
            .then((response) => {
                console.log(response.message);
                console.log(response);

                setMessagePopUp(response.message);
                if (response.statusCode === 200) {
                    setstep1(false);
                    setstep2(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function onSubmitOtp(data) {
        console.log(data);
        axiosInstance
            .post(URLConstants.logInEmailOtp(), {
                email: eMail,
                otp: data.otp,
            })
            .then((response) => {
                console.log(response);
                console.log(response.message);
                console.log(response.statusCode);
                if (response.statusCode === 200) {
                    setMessagePopUp("Reset Password");
                    setstep2(false);
                    setstep3(true);
                } else {
                    setMessagePopUp(response.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function onSubmitResetPassword(data) {
        console.log(data);
        axiosInstance
            .post(URLConstants.clientResetPassword(), {
                email: eMail,
                password: data.password,
            })
            .then((response) => {
                console.log(response.message);
                setMessagePopUp(response.message);
                setstep3(false);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const onEyeClick = () => {
        seteye(!eye);
    };
    return (
        <div className="rounded p-8">
            <p className="text-center text-2xl font-bold pb-1 mb-3">
                {props.name}
            </p>
            <form onSubmit={handleLogIn(onSubmitLogIn)}>
                <div className="mb-8">
                    <label className="block mb-2">Email Address</label>
                    <Controller
                        name="email"
                        control={controlLogIn}
                        render={({ field: { value, onChange } }) => (
                            <input
                                className={`border border-1 rounded w-full p-2  ${errorsLogIn?.email ? "border-red-500 " : "border-gray-500"
                                    }`}
                                type="text"
                                value={value}
                                onChange={onChange}
                                autoComplete="false"
                            />
                        )}
                        defaultValue=""
                    />
                    <small className="text-red-500">{errorsLogIn?.email?.message}</small>
                </div>
                <div className="mb-8">
                    <label className="block mb-2">Password</label>
                    <Controller
                        name="password"
                        control={controlLogIn}
                        render={({ field: { value, onChange } }) => (
                            <div className="pass-group relative">
                                <input
                                    type={eye ? "password" : "text"}
                                    className={`border border-1 rounded w-full p-2 ${errorsLogIn?.password ? "border-red-500 " : "border-gray-500"
                                        }`}
                                    value={value}
                                    onChange={onChange}
                                    autoComplete="false"
                                />
                                <span
                                    onClick={onEyeClick}
                                    className={`fa toggle-password absolute right-3 top-3 ${eye ? "fa-eye-slash" : "fa-eye"}`}
                                />
                            </div>
                        )}
                    />
                    <small className="text-red-500">{errorsLogIn?.password?.message}</small>
                </div>
                <div className="text-center">
                    <button className="bg-black rounded text-white px-4 md:px-16 py-1 w-auto" type="submit">
                        Login
                    </button>
                    <Loader
                        loaded={loaded}
                        lines={13}
                        length={20}
                        width={10}
                        radius={30}
                        corners={1}
                        rotate={0}
                        direction={1}
                        color="#000"
                        speed={1}
                        trail={60}
                        shadow={false}
                        hwaccel={false}
                        className="spinner"
                        zIndex={2e9}
                        top="50%"
                        left="50%"
                        scale={1.0}
                        loadedClassName="loadedContent"
                    />
                </div>
            </form>
            {/* Button trigger modal */}
            <div className="px-6 text-center mt-8" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className="cursor-pointer">Forgot / Reset Password?</span>
            </div>

            {/* Modal */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Forgot/Reset Password</h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            {step1 ? (
                                <form onSubmit={handleEmail(onSubmitEmail)}>
                                    <div className="mb-0 flex items-center">
                                        <label>
                                            Email Address{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex flex-1 ml-4 flex-col">
                                            <Controller
                                                name="email"
                                                control={controlEmail}
                                                render={({ field: { value, onChange } }) => (
                                                    <input
                                                        className={`border border-1 rounded w-full p-2  ${errorsLogIn?.email ? "border-red-500 " : "border-gray-500"
                                                            }`}
                                                        type="text"
                                                        value={value}
                                                        onChange={onChange}
                                                        autoComplete="false"
                                                    />
                                                )}
                                                defaultValue=""
                                            />
                                            <small className="block">
                                                {errorsEmail?.email?.message}
                                            </small>
                                        </div>
                                    </div>
                                    <h6 className="text-center mb-4 text-danger">
                                        {messagePopUp}
                                    </h6>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="px-6
                                            py-2.5
                                            bg-blue-600
                                            text-white
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            rounded
                                            shadow-md
                                            hover:bg-blue-700 hover:shadow-lg
                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                            active:bg-blue-800 active:shadow-lg
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-1"
                                        >
                                            Send OTP
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                ""
                            )}
                            {step2 ? (
                                <form onSubmit={handleOtp(onSubmitOtp)}>
                                    <div className="form-group">
                                        <label>
                                            OTP <span className="text-danger">*</span>
                                        </label>
                                        <Controller
                                            name="otp"
                                            control={controlOtp}
                                            render={({ field: { value, onChange } }) => (
                                                <input
                                                    placeholder="Enter OTP"
                                                    className={`form-control  ${errorsOtp?.otp ? "error-input" : ""
                                                        }`}
                                                    type="text"
                                                    value={value}
                                                    onChange={onChange}
                                                    autoComplete="false"
                                                />
                                            )}
                                            defaultValue=""
                                        />
                                        <small className="font11 absolute">
                                            {errorsOtp?.otp?.message}
                                        </small>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="px-6
                                                py-2.5
                                                bg-blue-600
                                                text-white
                                                font-medium
                                                text-xs
                                                leading-tight
                                                uppercase
                                                rounded
                                                shadow-md
                                                hover:bg-blue-700 hover:shadow-lg
                                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                active:bg-blue-800 active:shadow-lg
                                                transition
                                                duration-150
                                                ease-in-out
                                                ml-1"
                                            >
                                                Validate OTP
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                ""
                            )}
                            {step3 ? (
                                <form
                                    onSubmit={handleResetPassword(
                                        onSubmitResetPassword
                                    )}
                                >
                                    <div className="form-group">
                                        <label>
                                            Password <span className="text-danger">*</span>
                                        </label>
                                        <Controller
                                            name="password"
                                            control={controlResetPassword}
                                            render={({ field: { value, onChange } }) => (
                                                <div className="pass-group">
                                                    <input
                                                        placeholder="Enter Password"
                                                        className={`form-control  ${errorsResetPassword?.password
                                                            ? "error-input"
                                                            : ""
                                                            }`}
                                                        type={eye ? "password" : "text"}
                                                        value={value}
                                                        onChange={onChange}
                                                        autoComplete="false"
                                                    />
                                                    <span
                                                        onClick={onEyeClick}
                                                        className={`fa toggle-password" ${eye ? "fa-eye-slash" : "fa-eye"
                                                            }`}
                                                    />
                                                </div>
                                            )}
                                            defaultValue=""
                                        />
                                        <small className="font11">
                                            {errorsResetPassword?.password?.message}
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            Verify Password{" "}
                                            <span className="text-danger">*</span>
                                        </label>
                                        <Controller
                                            name="repeatPassword"
                                            control={controlResetPassword}
                                            render={({ field: { value, onChange } }) => (
                                                <div className="pass-group">
                                                    <input
                                                        placeholder="Verify Password"
                                                        className={`form-control  ${errorsResetPassword?.password
                                                            ? "error-input"
                                                            : ""
                                                            }`}
                                                        type={eye ? "password" : "text"}
                                                        value={value}
                                                        onChange={onChange}
                                                        autoComplete="false"
                                                    />
                                                    <span
                                                        onClick={onEyeClick}
                                                        className={`fa toggle-password" ${eye ? "fa-eye-slash" : "fa-eye"
                                                            }`}
                                                    />
                                                </div>
                                            )}
                                            defaultValue=""
                                        />
                                        <small className="font11">
                                            {errorsResetPassword?.password?.message}
                                        </small>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="px-6
                                            py-2.5
                                            bg-blue-600
                                            text-white
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            rounded
                                            shadow-md
                                            hover:bg-blue-700 hover:shadow-lg
                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                            active:bg-blue-800 active:shadow-lg
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-1"
                                        >
                                            {" "}
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import './Login&Signup.css';

const UserLogin = () => {
    const [inputData, setInputData] = useState({
        username: "",
        password: "",
    })
    const inputHandler = (event) => {
        const { name, value } = event.target
        setInputData(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }
    const readValues = () => {
        console.log(inputData)
    }
    let goToSignup = () => {
        window.location.href = "/crifto_shopping/signup";
    }
    return (
        <div className="container-fluid"
            id="login-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-9 col-lg-4">
                        <div className="card ">
                            <div className="row g-3 p-3">
                                <div
                                    className="col-12">
                                    <label
                                        htmlFor=""
                                        className="form-label">User Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={inputHandler}
                                        value={inputData.username}
                                    />
                                </div>
                                <div
                                    className="col-12">
                                    <label htmlFor=""
                                        className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={inputHandler}
                                        value={inputData.password}
                                    />
                                </div>
                                <a
                                    href="#"
                                    className='text-dark text-end'>Forgot password?</a>
                                <div className="col-12">
                                    <button
                                        className="btn btn-block btn-primary"
                                        onClick={readValues}
                                    >login</button>
                                </div>
                                <div
                                    className="col-12">
                                    <button
                                        className="btn btn-block btn-dark"
                                        onClick={goToSignup}
                                    >Become a member</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
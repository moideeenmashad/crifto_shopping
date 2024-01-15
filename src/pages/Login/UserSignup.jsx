import React, { useState } from 'react'
import './Login&Signup.css'

const UserSignup = () => {
    const [inputData, setInputData] = useState({
        userEmail: "",
        createPassword: "",
        regDate: "",
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
    return (
        <div className="container-fluid" id="login-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-9 col-lg-4">
                        <div className="card ">
                            <div className="row g-3 p-3">
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text"
                                        className="form-control"
                                        name="userEmail"
                                        onChange={inputHandler}
                                        value={inputData.userEmail}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">Create Password</label>
                                    <input type="password"
                                        className="form-control"
                                        name="createPassword"
                                        onChange={inputHandler}
                                        value={inputData.createPassword}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">Date</label>
                                    <input type="date"
                                        className="form-control"
                                        name="regDate"
                                        onChange={inputHandler}
                                        value={inputData.regDate}
                                    />
                                </div>
                                <a href="/crifto_shopping/signin" className="text-dark text-end">already a member?</a>
                                <div className="col-12">
                                    <button
                                        className="btn btn-block btn-outline-dark"
                                        onClick={readValues}>Became a member</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignup
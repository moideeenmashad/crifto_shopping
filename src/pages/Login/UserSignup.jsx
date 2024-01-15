import React from 'react'
import './Login&Signup.css'

const UserSignup = () => {
    return (
        <div className="container-fluid" id="login-body">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-9 col-lg-4">
                        <div className="card ">
                            <div className="row g-3 mt-5 p-3">
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">User Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={inputHandler}
                                        value={inputData.username}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={inputHandler}
                                        value={inputData.password}
                                    />
                                </div>
                                <div className="col-12">
                                    <button
                                        className="btn btn-block btn-primary"
                                        onClick={readValues}>login</button>
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
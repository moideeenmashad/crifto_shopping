import React from 'react'

const Login = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <div className="card">
                            <div className="row g-3 mt-5">
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">User Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="username"
                                        onChange=""
                                        value=""
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="text"
                                        className="form-control"
                                        name="password"
                                        onChange=""
                                        value=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
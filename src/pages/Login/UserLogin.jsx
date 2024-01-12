import React, { useState } from 'react'

const UserLogin = () => {
    const [inputData, setInputData] = useState({
        username: "",
        password: "",
    })
    const hello = () => {
        console.log(typeof inputData.name)
    }
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
                                        onChange={inputHandler}
                                        value={inputData.username}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="text"
                                        className="form-control"
                                        name="password"
                                        onChange={inputHandler}
                                        value={inputData.password}
                                    />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-block btn-primary" onClick={readValues}>login</button>
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
import React, { useState } from 'react'


const Form = () => {
    const [inputData, setInputData] = useState({
        userName: String,
        password: String,
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
    // useForm()

    const readValues = () => {
        console.log(inputData)
    }
    return (
        <div>

            <div className="container">
                <div className="row g-3">
                    <div className="col-12">
                        <h3>Sign In</h3>
                        <label className="form-label" name="name">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={inputHandler}
                            value={inputData.userName}
                            name="userName" />
                    </div>
                    <div className="col-12">
                        <label className="form-label" name="name">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={inputHandler}
                            value={inputData.password}
                            name="password" />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={readValues}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
import React, { useState } from 'react'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
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
        <Container fluid id="login-body">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={9} lg={4}>
                        <Card className='p-3'>
                            <Row className="g-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter email"
                                    name="userEmail"
                                    onChange={inputHandler}
                                    value={inputData.userEmail}
                                />
                                <Form.Label>Create Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    name="createPassword"
                                    onChange={inputHandler}
                                    value={inputData.createPassword}
                                />
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="regDate"
                                    onChange={inputHandler}
                                    value={inputData.regDate}
                                />

                                <a href="/signin" className="text-dark text-end">
                                    already a member?
                                </a>

                                <Button
                                    variant="outline-dark"
                                    className="btn-block"
                                    onClick={readValues}
                                >
                                    Become a member
                                </Button>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default UserSignup
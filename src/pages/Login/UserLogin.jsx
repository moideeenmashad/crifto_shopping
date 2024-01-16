import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
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
        window.location.href = "/signup";
    }
    return (
        <Container fluid id="login-body">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={9} lg={4}>
              <Card className="p-3">
                    <Row className="g-3">
                      <Col xs={12}>
                        <Form.Label htmlFor="username" className="form-label">
                          User Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          onChange={inputHandler}
                          value={inputData.username}
                        />
                      </Col>
                      <Col xs={12}>
                        <Form.Label htmlFor="password" className="form-label">
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={inputHandler}
                          value={inputData.password}
                        />
                      </Col>
                      <Col xs={12} className="text-end">
                        <a href="#" className="text-dark">
                          Forgot password?
                        </a>
                      </Col>
                      <Col xs={12}>
                        <Button
                          variant="primary"
                          className="btn-block"
                          onClick={readValues}
                        >
                          Login
                        </Button>
                      </Col>
                      <Col xs={12}>
                        <Button
                          variant="dark"
                          className="btn-block"
                          onClick={goToSignup}
                        >
                          Become a member
                        </Button>
                      </Col>
                    </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    )
}

export default UserLogin
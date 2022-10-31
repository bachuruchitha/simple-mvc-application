import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  FormText,
  Button,
} from "reactstrap";

const Login = ({ setUserState }) => {
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      error.username = "Email is required";
    } else if (!regex.test(values.username)) {
      error.username = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:8080/login/checkLogin", user).then((res) => {
        if (res.data) {
          // localStorage.setItem("authenticated", true);
          console.log("validated");
          setauthenticated(true)
          localStorage.setItem("authenticated", true);
          navigate("/welcome");
        } else alert("Invalid Login Please Register");
      });
    }
  }, [formErrors]);
  return (
    <Container className="p-4">
      <h2 className="text-center py-3">Login</h2>
      <Form onSubmit={loginHandler}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="username" sm={3} lg={2}>
            Email Id
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="username"
              name="username"
              placeholder="Enter your Email id"
              value={user.username}
              onChange={changeHandler}
              type="text"
            />
            <p style={{ color: "red" }}>{formErrors.username}</p>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="password" sm={3} lg={2}>
            Password
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={changeHandler}
              type="password"
            />
            <p style={{ color: "red" }}>{formErrors.password}</p>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import Login from "./Login";
import { Navigate } from "react-router-dom";
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
  Row,
  Alert,
} from "reactstrap";
import UserExist from "./Home";
const SignUp = () => {
  const [formerrors, setformerrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [isregistered, setisregistered] = useState("no");
  const navigate = useNavigate();
  const [user, setuserDetails] = useState({
    name:"",
    empid:"",
    username:"",
    phone:"",
    password:""
  });
  const changeHandler=(e)=>{
    const{name,value}=e.target;
    setuserDetails({
      ...user,
      [name]:value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setformerrors(validate(user));
    setisSubmit(true);
    
  };
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      axios.post("http://localhost:8080/login/doRegister",user).then((res)=>{
        console.log(res);
        if(res.data)
        navigate("/login",{replace:true});
        else
        alert("User already exist");
      })

    }
  }, [formerrors])
  
  const validate = (user) => {
    const errors = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!user.name) {
      errors.name = "name is required";
    }
    if (!user.empid) {
      errors.empid = "Employee id is required";
    }
    if (!user.username) {
      errors.username = "Email is required";
    } else if (!regex.test(user.username)) {
      errors.username = "This is not a valid email format!";
    }
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } 
    return errors;
  };

  return (
    <Container className="p-4">
      <h2 className="text-center py-3">Register</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="name" sm={3} lg={2}>
            Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
              value={user.name}
              onChange={changeHandler}
            />
            <p style={{color:"red"}}>{formerrors.name}</p>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="empid" sm={3} lg={2}>
            Employee Id
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="empid"
              name="empid"
              placeholder="Enter your Employee id"
              type="text"
              value={user.empid}
              onChange={changeHandler}
            />
            <p style={{color:"red"}}>{formerrors.empid}</p>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
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
              type="text"
              value={user.username}
              onChange={changeHandler}
            />
            <p style={{color:"red"}}>{formerrors.username}</p>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="phone" sm={3} lg={2}>
            Phone
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="phone"
              name="phone"
              placeholder="Enter your Contact number"
              type="text"
              value={user.phone}
              onChange={changeHandler}
            />
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
              type="password"
              value={user.password}
              onChange={changeHandler}
            />
            <p style={{color:"red"}}>{formerrors.password}</p>
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

export default SignUp;

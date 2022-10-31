import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";
const Welcome = () => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    console.log(localStorage.getItem("authenticated"));
    const loggedInUser = localStorage.getItem("authenticated");
    if (!localStorage.getItem("authenticated")) {
      console.log("not valid");
      setauthenticated(loggedInUser);
      navigate("/login");
    }
  }, []);

  return (
      <Container className="m-5">
      <h2 className="text-center m-4">Welcome</h2>

      <Button className="mx-auto my-0 d-block"
        color="danger"
        onClick={() => {
          localStorage.removeItem("authenticated");
          navigate("/login");
        }}
      >
        Logout
      </Button>
      </Container>
      

  );
};

export default Welcome;

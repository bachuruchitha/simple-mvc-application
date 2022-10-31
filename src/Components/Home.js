import React from "react";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const UserExist = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="d-flex my-0 mx-auto  justify-content-center">
        <Button
          color="primary"
          className="m-4"
          onClick={() => navigate("/login", { replace: true })}
        >
          Login
        </Button>
        <Button
          color="secondary"
          className="m-4"
          onClick={navigate("/signup", { replace: true })}
        >
          SignUp
        </Button>
      </Container>
    </div>
  );
};

export default UserExist;

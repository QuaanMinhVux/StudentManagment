import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const bodyRequest = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    const response = await fetch("/create", {
      method: "POST",
      body: JSON.stringify(bodyRequest),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    console.log(response);
    alert(response.message);
    navigate("/");
  };

  return (
    <Container>
      <h2>Create</h2>
      <Form>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="secondName">
          <Form.Label>Second Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your second name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Container>
  );
}

export default Create;

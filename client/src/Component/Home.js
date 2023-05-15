import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Home() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);
  const deleteStudent = async (id) => {
    const response = await fetch("delete", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    alert(response.message);
    window.location.reload(false);
  };
  return (
    <Container>
      <h2>CRUD</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>
                <Link to={`/update/` + student.id}>
                  <Button variant="outline-primary">Update</Button>
                </Link>
                <Button
                  variant="outline-primary"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to={`/create`}>
        <Button>Create</Button>
      </Link>
    </Container>
  );
}

export default Home;

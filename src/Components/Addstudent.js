import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './Students';
import { Link, useNavigate } from 'react-router-dom';

function AddStudent() {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [id, setId] = useState('');
  let history = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();

    let newStudent = { id: id, name: name, grade: grade };
    Students.push(newStudent);

    let storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    storedStudents.push(newStudent);
    localStorage.setItem('students', JSON.stringify(storedStudents));

    history('/');
  };

  return (
    <div style={{ margin: '10rem' }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type=""
            placeholder="Enter Id"
            required
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type=""
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type=""
            placeholder=""
            required
            onChange={(e) => setGrade(e.target.value)}
          />
        </Form.Group>
        <Button size="lg" onClick={handleAdd}>
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddStudent;

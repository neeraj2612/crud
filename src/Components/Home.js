import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './Students';
import{Link, useNavigate} from 'react-router-dom';
import AddStudent from './Addstudent';
function Home() {
    let history = useNavigate();
    const handleDelete =(id)=>{
        let index = Students.map(function(e){
            return e.id
        }).indexOf(id);

        Students.splice(index,1);
        history('/');
    }

  return (
    <div style={{margin:"10rem"}}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Students && Students.length > 0 ? (
            Students.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.grade}</td>
                  <td><Button  >Edit</Button>
                  <Button onClick={()=> handleDelete(item.id)}>Delete</Button></td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          )}
        </tbody>
      </Table>
      <br />
      <Link className='d-grid gap-2' to={'/AddStudent'}>
      <Button size='lg' >Add</Button>
      </Link>
    </div>
  );
}

export default Home;

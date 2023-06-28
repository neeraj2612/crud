// //App.js

// import './App.css';
// import Home from './Components/Home';
// import AddStudent from './Components/Addstudent';
// import Editstudent from './Components/Editstudent';
// import { Routes, BrowserRouter, Route } from 'react-router-dom';
// function App() {
//   return (
//     <BrowserRouter>  
//     <Routes>
//       <Route path = '/' element = {<Home/>}/>
//       <Route path = '/AddStudent' element = {<AddStudent/>}/>
//       <Route path = '/Editstudent' element = {<Home/>}/>
//       <Route path = '/Editstudent' element = {<Home/>}/>
//     </Routes>
//      </BrowserRouter>
 
//   );
// }

// export default App;

// // Home.js

// import React from 'react';
// import { Table, Button, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Students from './Students';
// import{Link, useNavigate} from 'react-router-dom';
// import AddStudent from './Addstudent';
// function Home() {
//     let history = useNavigate();
//     const handleDelete =(id)=>{
//         let index = Students.map(function(e){
//             return e.id
//         }).indexOf(id);

//         Students.splice(index,1);
//         history('/');
//     }

//   return (
//     <div style={{margin:"10rem"}}>
//       <Table striped bordered hover variant="dark">
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>Name</th>
//             <th>Grade</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Students && Students.length > 0 ? (
//             Students.map((item) => {
//               return (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.grade}</td>
//                   <td><Button  >Edit</Button>
//                   <Button onClick={()=> handleDelete(item.id)}>Delete</Button></td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td colSpan="3">No data</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//       <br />
//       <Link className='d-grid gap-2' to={'/AddStudent'}>
//       <Button size='lg' >Add</Button>
//       </Link>
//     </div>
//   );
// }

// export default Home;

// //Add
// import { Form, Button } from 'react-bootstrap';
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Students from './Students';
// import { Link, useNavigate } from 'react-router-dom';

// function AddStudent() {
//   const [name, setName] = useState('');
//   const [grade, setGrade] = useState('');
//   const [id, setId] = useState('');
//   let history = useNavigate();

//   const handleAdd = (e) => {
//     e.preventDefault();

//     let newStudent = { id: id, name: name, grade: grade };
//     Students.push(newStudent);
//     history('/');
//   };

//   return (
//     <div style={{ margin: '10rem' }}>
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Label>ID</Form.Label>
//           <Form.Control
//             type=""
//             placeholder="Enter Id"
//             required
//             onChange={(e) => setId(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type=""
//             placeholder="Enter Name"
//             required
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Grade</Form.Label>
//           <Form.Control
//             type=""
//             placeholder=""
//             required
//             onChange={(e) => setGrade(e.target.value)}
//           />
//         </Form.Group>
//         <Button size="lg" onClick={handleAdd}>
//           Add
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default AddStudent;

// //api
// import React, { useState, useEffect } from 'react';

// const Gallery = () => {
//   const auth = '563492ad6f917000010000011b34d84b304940c1be9d2c23d74cf2e6';
//   const [galleryImages, setGalleryImages] = useState([]);

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     const url = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
//     const response = await fetch(url, {
//       headers: {
//         Authorization: auth,
//       },
//     });
//     const data = await response.json();
//     setGalleryImages(data.photos);
//   };

//   return (
//     <div className="flex flex-wrap justify-center">
//     {galleryImages.map((image) => (
//       <div key={image.id} className="w-1/3 p-4">
//         <img src={image.src.large} alt={image.photographer} className="w-full h-64 object-cover" />
//         <div className="text-center">
//           <p>{image.photographer}</p>
//           <button>
//             <a href={image.src.original} target="_blank" rel="noopener noreferrer">
//               Download
//             </a>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;


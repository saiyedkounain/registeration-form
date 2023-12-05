import React from 'react';
import ReactDOM from 'react-dom/client';
import Registerr from './registeration/Registerr';
// import App from "./App";
// import "./registeration/register.css"
// import Container from './registeration/Container';

// import { BrowserRouter, Routes , Route } from 'react-router-dom';
// import Layout from "./pages/Layout"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import NoPage from './pages/NoPage';

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout/>}>
//           <Route index element = {<Home/>} />
//           <Route path='blog' element = {<Contact/>} />
//           <Route path='about' element = {<About/>} />
//           <Route path="*" element = {<NoPage/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Registerr/>
);




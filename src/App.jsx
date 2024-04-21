import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import About from './Pages/About';
import Works from './Pages/Works';
import Experience from './Pages/Experience';
import Landing from './Pages/Landing';
import "./App.css";
import Contact from './Pages/Contact';
import Github from './Pages/Github';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="about" element={<About />} />
                    <Route path="works" element={<Works/>}/>
                    <Route path="experience" element={<Experience/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="github" element={<Github/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

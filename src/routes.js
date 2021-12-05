import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


import Main from "./components/Main";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";


const Fido = () => (
    <Routes>
        <Route exact path="/" component={<Main/>} />
        <Route exact path="/contact" component={<Contact/>} />
        <Route exact path="/thanks/:name" component={<Thanks/>} />
    </Routes>
);

export default Fido;

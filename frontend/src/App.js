import React from "react"
import axios from "axios"

import Navbar from "./components/Navbar"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const BE = async () => {
    console.log("clicked")
    const newNote = {
        title: "Someone5:21",
        content: "myCopntentdlkfnsoiugfnqwbeoiuberhnwfiweugfhiwe",
    }
    await axios.post("http://localhost:3001/create", newNote)
}

function App() {
    return (
        <div>
            <Navbar />
            <div onClick={BE}>Derek</div>
            <Router>
                abcde
                <Routes>
                    Test3r
                    <Route path="/notes">Notes Route Main</Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App

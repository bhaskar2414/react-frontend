import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListBookComponent from "./components/ListBookComponent";
import HomeComponent from "./components/HomeComponent";
import Header from "./components/Header";
import Login from "./components/Auth/Login";
//import bgImage from "./assets/bgImage.jpeg";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";

function App() {
  return (
    <Card component="div" sx={{ minWidth: 300, flexGrow: 1 }}>
      {/* <CardCover>
        <video
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
      </CardCover> */}
      <CardContent sx={{ justifyContent: "center", gap: 1 }}>
        <Header />
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" exact element={<HomeComponent />}></Route>
              <Route path="/login" exact element={<Login />}></Route>
              <Route path="/list" exact element={<ListBookComponent />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </CardContent>
    </Card>
    // </Box>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

import React from "react";
import "../App.css";
import Typed from "react-typed";
import start from "./img/startup.svg";

const Home = () => {
  return (
    <div >
      <div className="floatleft">
        <img src={start} className="App-startBtn" alt="Start" />
      </div>
      <div className="floatRight">
        <p className="PHome">Programming is, converting data through</p>
          <Typed
            className="typedHome"
            strings={["HTML", "CSS", " and JavaScript", "So let's Program with love <3"]}
            typeSpeed={40}
            backSpeed={30}
          ></Typed>
      </div>
    </div>
  );
};
export default Home;

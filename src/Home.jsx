import React from "react";
import SideBar from "./componenets/SideBar";
import ChatBox from "./componenets/ChatBox";
import "./Style.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;

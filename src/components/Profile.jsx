import React from "react";
import { Flex, Image } from "antd";
import { HomeFilled, IdcardFilled, FolderOpenFilled } from "@ant-design/icons";

import portfolio from "../assets/img/portfolio.jpg";
import "../assets/css/about.css";

import Information from "./Profile/Information";
import Skill from "./Profile/Skill";
import WorkExperince from "./Profile/WorkExperince";

const Profile = () => {
  return (
    <div>
      <Flex justify={"center"}>
        <div className="head-aboutme">
          <div
            className="border-box-late"
            style={{ width: "100%", height: "100%", top: "5px", left: "5px" }}
          ></div>
          <div
            className="border-box-brown"
            style={{ width: "100%", height: "100%", top: "0px", left: "-5px" }}
          ></div>
          <Image
            className="aboutme-img"
            src={portfolio}
            preview={false}
            width={"100%"}
            height={"100%"}
          ></Image>
          <div className="content-name">ABOUT</div>
          <div
            className="content-name"
            style={{ top: "60%", left: "75%", color: "#000" }}
          >
            ME
          </div>
        </div>
      </Flex>
      <div className="content">
      <div className="menu-balloon">
        <div
          className="border-box-brown p-3"
          style={{ width: "100%", height: "100%", top: "0px", left: "-7px" }}
        ></div>
        <div className="btn-balloon">
          <HomeFilled />
        </div>
        <div className="btn-balloon">
          <IdcardFilled />
        </div>
        <div className="btn-balloon">
          <FolderOpenFilled />
        </div>
      </div>
      <div className="content-data">
      <Information />
      <Skill />
      <WorkExperince />
      </div>
      </div>
    </div>
  );
};

export default Profile;

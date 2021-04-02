import React from "react";
import styled from "styled-components";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import "./Icon.css";

const Appheader = styled.header`
  position: absolute;
  background-color: #c39c89;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  width: 100%;
`;

const HeaderText = styled.text`
  position: fixed;
  height: 30px;
  top: 15px;
  margin-left: 5%;
  font-size: 37px;
  font-family: serif;
  color: white;
  z-index: 1;
`;

function Header({ setIsOpenModal, children }) {
  return (
    <Appheader>
      <HeaderText>Cafe&Coffee</HeaderText>
      <BorderColorIcon
        className="Penicon"
        onClick={() => setIsOpenModal(true)}
      />
      {children}
    </Appheader>
  );
}
export default Header;

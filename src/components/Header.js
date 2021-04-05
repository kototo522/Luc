import React from "react";
import styled from "styled-components";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import "./Icon.css";

const Appheader = styled.header`
  position: absolute;
  background-color: #c39c89;
  margin: 0 auto;
  height: 80px;
  width: 100%;
`;

const HeaderText = styled.text`
  position: absolute;
  height: 50px;
  top: 15px;
  margin: auto 0 auto 5%;
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

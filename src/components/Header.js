import React, { useState } from "react";
import styled from "styled-components";

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

const Penicon = styled.img`
  position: absolute;
  top: 50%;
  right: 10%;
  height: 30px;
  cursor: pointer;
  transform: translateY(-50%);
`;

function Header({ setIsOpenModal, children }) {
  return (
    <Appheader>
      <HeaderText>Cafe&Coffee</HeaderText>
      <Penicon src={"./images/pen.svg"} onClick={() => setIsOpenModal(true)} />
      {children}
    </Appheader>
  );
}
export default Header;

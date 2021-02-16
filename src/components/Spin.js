import React from "react";
import styled from "styled-components";
import "./Spin.css";

const Loadbackground = styled.div`
  background-color: rgba(231, 176, 159, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 500;
`;

function Spin() {
  return (
    <Loadbackground>
      <div className="spinner"></div>
    </Loadbackground>
  );
}

export default Spin;

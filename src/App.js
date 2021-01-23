import React, { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";

const Appbackground = styled.div`
  background-color: #e7b09f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Coffee = styled.img`
  display: flex;
  position: center;
  top: 30px;
  margin-left: auto;
  margin-right: auto;
  height: 650px;
  width: 100vw;
  object-fit: contain;
`;

const Appheader = styled.div`
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

const Main = styled.div`
  position: fixed;
  margin: 0 auto;
  z-index: 2;
  top: 80px;
  height: calc(100vh - 80px);
  width: 100vw;
  padding-top: 80px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Biglogo = styled.div`
  position: absolute;
  top: 23%;
  left: 50%;
  font-size: 10em;
  font-family: serif;
  color: #c39c89;
  transform: translateX(-50%);
  z-index: 1;
`;

const Postbox = styled.div`
  position: relative;
  top: 450px;
  left: 50%;
  height: 25%;
  width: max(60%, 250px);
  margin-top: 80px;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(238, 226, 211, 0.6);
  transform: translateX(-50%);
  font-size: 30px;
  color: #957e80;
  &::after {
    position: relative;
    top: 200px;
    display: block;
    height: 120px;
    content: "";
  }
`;

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [infoList, setinfoList] = useState([]);

  const addInfoList = (info) => {
    setinfoList([...infoList, info].reverse());
    setIsOpenModal(false);
  };

  return (
    <div>
      <Appbackground>
        <Appheader>
          <Appheader />
          <HeaderText>Cafe&Coffee</HeaderText>
          <Penicon
            src={"./images/pen.svg"}
            onClick={() => setIsOpenModal(true)}
          />
          {isOpenModal && (
            <Form setIsOpenModal={setIsOpenModal} addInfoList={addInfoList} />
          )}
        </Appheader>
        <Coffee src={"./images/coffee.jpg"} />
      </Appbackground>
      <Main>
        <Biglogo>Luc</Biglogo>
        {infoList.map((info) => (
          <Postbox>{info}</Postbox>
        ))}
      </Main>
    </div>
  );
}

export default App;

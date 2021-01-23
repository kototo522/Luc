import React, { useState } from "react";
import styled from "styled-components";


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
  height: 650px;
  width: 100vw;
  object-fit: contain;
`;

const Appheader = styled.div`
  position: relative;
  background-color: #c39c89;
  margin-top: 0px;
  height: 80px;
  width: 100%;
`;

const HeaderText = styled.text`
  position: fixed;
  height: 30px;
  top: 10px;
  margin-left: 70px;
  font-size: 37px;
  color: white;
  z-index: 1;
`;

const Pentab = styled.img`
  position: absolute;
  top: 50%;
  right: 10%;
  height: 30px;
  cursor: pointer;
  transform: translateY(-50%);
`;

const Main = styled.div`
  position: fixed;
  z-index: 2;
  top: 80px;
  left: 0;
  height: calc(100vh - 80px);
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Biglogo = styled.div`
  position:absolute;
  top: 230px;
  left: 50%;
  font-size: 250px;
  color: #c39c89;
  transform: translateX(-50%);
`;

const SampleBox = styled.div`
  position: relative;
  top: 450px;
  height: 200px;
  width: 700px;
  border-radius: 10px;
  background-color: rgba(238, 226, 211, 0.8);
  transform: translateX(50%);
  &::after {
    position: relative;
    top: 200px;
    display: block;
    height: 80px;
    content: "";
  }
`;

const Frombackground = styled.div`
  position: fixed;
  background-color: rgba(149, 126, 128, 0.75);
  z-index: 3;
  min-height: 100vh;
  width: 100%;
`;

const Textarea = styled.textarea`
  position: fixed;
  vertical-align: middle;
  margin-left: 400px;
  margin-top: 90px;
  border-radius: 10px;
  border: 1px solid black;
  height: 400px;
  width: 600px;
  background-color: #c39c89;
  border: white;
  font-size: 35px;
  color: #eee2d3;
  box-shadow: white;
`;

const Clear = styled.img`
  position: fixed;
  margin-top: 60px;
  margin-left: 300px;
  cursor: pointer;
  z-index: 4;
  height: 50px;
  width: 50px;
`;

const Inputbutton = styled.input`
  position: fixed;
  margin-top: 430px;
  margin-left: 900px;
  height: 50px;
  width: 65px;
  font-size: 20px;
  color: #c39c89;
  background-color: #eee2d3;
  border: white;
  z-index: 5;
`;

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [info, setInfo] = useState("");
  const [infoList, setinfoList] = useState([]);

  const addInfoList = (info) => {
    setinfoList([...infoList, info]);
    setIsOpenModal(false);
  };

  return (
    <div>
      <Appbackground>
      <Appheader>
        <HeaderText>blog</HeaderText>
      <Appheader/>
        <Pentab src={"./images/pen.svg"} onClick={() => setIsOpenModal(true)}/>
        {isOpenModal && (
          <Frombackground>
            <Inputbutton value="shere" onClick={() => addInfoList(info)} />

            <Clear
              src={"./images/clear.svg"}
              onClick={() => setIsOpenModal(false)}
            />

            <Textarea
              row="10"
              cols="20"
              placeholder={"おすすめのスイーツやカフェの情報を共有しよう！"}
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </Frombackground>
        )}
      </Appheader>
        <Coffee src={"./images/coffee.jpg"} />
      </Appbackground>
      <Main>
        <Biglogo>text</Biglogo>
        {infoList.map((info) => (
          <SampleBox>{info}</SampleBox>
        ))}
      </Main>
    </div>
  );
}

export default App;

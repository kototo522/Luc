import React, {useState} from "react";
import styled from "styled-components";
import { Modal } from "./madal.js";


const Coffee = styled.img`
  margin-bottom: 75px;
  display: center;
  top: 30px;
  left: 0;
  height: 650px;
  width: 875px;
`;

const Pentab = styled.img`
  margin-left: 1150px;
  margin-top: 45px;
  height: 30px;
  cursor: pointer;
`;

const Clear = styled.img`
  position: center;
  cursor: pointer;
  z-index: 5;
  height: 50px;
  width: 50px;
`

const Appheader = styled.div`
  background-color: #c39c89;
  height: 80px;
  width: 100%;
  position: relative;
`;

const HeaderText = styled.text`
  height: 30px;
  padding-right: 50px;
  font-size: 37px;
  color: white;
`;

const Appbackground = styled.div`
  background-color: #e7b09f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Biglogo = styled.text`
  position: relative;
  top: 260px;
  left: 0px;
  vertical-align: middle;
  padding: 500px;
  font-size: 250px;
  color: #c39c89;
`;

const Main = styled.div`
  position: fixed;
  z-index: 2;
  top: 80px;
  left: 0;
  height: calc(100vh - 80px);
  width: 100vw;
  overflow-y: scroll;
`;

const SampleBox = styled.div`
  position: relative;
  top: 450px;
  margin: 80px auto 0;
  height: 200px;
  width: 700px;
  border-radius: 10px;
  background-color: rgba(238, 226, 211, 0.8);
  &::after {
    position: relative;
    top: 200px;
    display: block;
    height: 80px;
    content: "";
  }
`;

const Frombackground=styled.div`
position: relative;
background-color: rgba(195, 156, 137, 0.6);
z-index: 3;
min-height: 100vh;
width: 100%;
`

const Card = styled.div`
   position: relative;
  display: center;
  vertical-align: middle;
  z-index: 4;
  height: 400px;
  width: 600px;
  background-color: #eee2d3;
`


function App() {

  const [Page, setPage] = useState(1);
    
  const page = () => {
    setPage(2);
  }

  const [Delete, setDelete] = useState(3);

  const clear = () => {
    setDelete(4);
}

  const [showModal, setShowModal] = useState(false);

  const submitForm = (e) => {
      e.preventDefault();
      setShowModal(true);
  }


  return (
    <div>
      <Appheader>
        <HeaderText>blog</HeaderText>
        <Pentab 
          src={"./images/pen.svg"} onClick = {() => setPage('Page')}></Pentab>
          {Page === 1
          ? <div/>
          : <Frombackground>
              <Card>

               <Clear
                    src={"./images/clear.svg"} onClick = {() => setDelete('Delete')}></Clear>
                   {Delete === 3
                    ? <div/>
                    : <div cancel = {() => setShowModal(false)} />
                   }  

              </Card>
          </Frombackground>
          } 


      </Appheader>
      <Appbackground>
        <Coffee src={"./images/coffee.jpg"} />
      </Appbackground>
      <Main>
        <Biglogo>text</Biglogo>
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
        <SampleBox />
      </Main>
      {/* <Modal>
        <From />
      </Modal> */}
    </div>
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />

import React, {useState} from 'react';
import styled from "styled-components";



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
  position: fixed;
  margin-top: 60px;
  margin-left: 300px;
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
  position: fixed;
  height: 30px;
  top: 20px;
  margin-left: 70px;
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
  top: 230px;
  left: 33px;
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
position: fixed;
background-color: rgba(149, 126, 128, 0.75);
z-index: 3;
min-height: 100vh;
width: 100%;
`


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
`

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
  z-index: 100;
`

function App() {

  const [Page, setPage] = useState(1);
  const page = () => {
    setPage(2);
  }


  const depage = () => {
    setPage(1);
  }


  const [Delete, setDelete] = useState(3);
  const clear = () => {
    setDelete(4);
}



  const [showModal, setShowModal] = useState(false);

  const SubmitForm = () => {
      setShowModal(true);
  }


  const [textarea, setText] = useState('');



  return (
    <div>
      <Appheader>
        <HeaderText>blog</HeaderText>
        <Pentab 
          src={"./images/pen.svg"} onClick = {() => setPage('page')}></Pentab>
          {Page === 1
          ? <div/>
          : <Frombackground>

         <Inputbutton type = "submit" value="shere"/>

        
        <Clear
          src={"./images/clear.svg"} onClick = {() => depage()}></Clear>
           {Delete === 3
           ? <div/>
           : <SubmitForm cancel = {() => setShowModal(false)}/>
          }   

              <Textarea row="10" cols="20">おすすめのスイーツやカフェの情報を共有しよう！
              
              </Textarea>

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
    </div>
  );
}

export default App;

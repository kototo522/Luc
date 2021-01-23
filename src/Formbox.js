import React, {useState} from 'react';
import styled from "styled-components";


const Clear = styled.img`
  position: center;
  cursor: pointer;
  z-index: 5;
  height: 50px;
  width: 50px;
`


const Frombackground=styled.div`
position: relative;
background-color: rgba(195, 156, 137, 0.6);
z-index: 3;
min-height: 100vh;
width: 100%;
`


const Textarea = styled.textarea`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
    height: 400px;
    width: 600px;
    background-color: red;
    border: white;
    font-size: 35px;
    color: brown;
`

const Inputbutton = styled.input`
  height: 50px;
  width: 65px;
  font-size: 20px;
  background-color: red;
  border: white;
`
export const Formbox = () =>{

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


  return(
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

              <Textarea row="10" cols="20">おすすめのスイーツやカフェの情報を共有しよう！</Textarea>

          </Frombackground>
          } 
     );
  }
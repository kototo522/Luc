import React from 'react';
import ReactDOM from 'react-dom';
import styled from  'styled-components';

const modalRoot = document.getElementById('modal-root');

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 100;
`

export const Modal = (props) => {
    return ReactDOM.createPortal(
        <Container>
            {/* { props.children } */}
        </Container>,
        modalRoot,
    )
}
import React from "react";
import styled from "styled-components";

const ImageInputLoad = () => {
  return (
    <Wrapper>
      <Button>
        <span>Loaded photo</span>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2em 0;
  width: 100%;
 
`;

const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 0.4em 1em;
  background-color: orange;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  border-radius: 0.2em;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    animation-name: scale-in-hor-left;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
  }

  @-webkit-keyframes scale-in-hor-left {
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}
@keyframes scale-in-hor-left {
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}

`;

export default ImageInputLoad;

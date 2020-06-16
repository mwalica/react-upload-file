import React, { useRef } from "react";
import styled from "styled-components";

const ImageInput = ({ name, imageHandler }) => {
  const fileInputRef = useRef(null);

  return (
    <Wrapper>
      <Button onClick={() => fileInputRef.current.click()}>
        <span>Add photo</span>
        <input
          type="file"
          name={name}
          ref={fileInputRef}
          accept=".jpg,.png,.jpeg"
          onChange={imageHandler}
        />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2em 0;
  width: 100%;
`;

const Button = styled.div`
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
  transition: color 0.4s ease;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
  input {
    display: none;
  }
`;

export default ImageInput;

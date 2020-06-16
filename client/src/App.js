import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import ImageInput from "./components/ImageInput";
import ImageInputLoad from "./components/ImageInputLoad";

const App = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const imageHandler = async (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      setLoading(false);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <h1>Image Upload</h1>
      <form autoComplete="off">
        {loading ? (
          <ImageInputLoad />
        ) : (
          <ImageInput name="file" imageHandler={imageHandler} />
        )}
      </form>
      {uploadedFile && (
        <Image>
          <img src={uploadedFile.filePath} alt="Preview" />
        </Image>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  width: 80;
  max-width: 760px;

  padding: 1em 0;
  h1 {
    font-weight: 400;
    font-size: 2.5rem;
  }
  form {
    width: 100%;
  }
`;

const Image = styled.div``;

export default App;

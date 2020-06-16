const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

//init app
const app = express();
app.use(cors());

app.use(fileUpload());

//upload endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  console.log(file);
  file.mv(`${__dirname}/client/build/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

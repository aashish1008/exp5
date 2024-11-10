const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Endpoint to read file content
app.get("/read-file", (req, res) => {
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.send({ success: false, message: "Error reading file" });
    } else {
      res.send({ success: true, data: data });
    }
  });
});

app.post("/write-file", (req, res) => {
  const content = req.body.content;
  fs.writeFile("data.txt", content, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      res.send({ success: false, message: "Error writing to file" });
    } else {
      res.send({
        success: true,
        message: "Content successfully written to file",
      });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

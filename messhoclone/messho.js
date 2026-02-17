const express = require("express");
const path = require("path");

const app = express();

// serve all static files (html, css, images)
app.use(express.static(__dirname));

// open index.html on homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "meesho.html"));
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

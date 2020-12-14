const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const api = require('./routes/api')
const app = express();
app.use(cors()); // to avoid cross origin errors when connecting to frontend as server runs on port 3000 frontend runs on another port

app.use(bodyParser.json());

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api
app.use('/api', api);

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/ ie landing page
app.get("/", (req, res)=> {
    res.send('Hello world from server.js')
});

// server is listening on either prod port or Dev port 3000
app.listen(PORT, err => {
    if (err) { console.log("Server error"); return }
    console.log(`Server listening on ${PORT}`);
});

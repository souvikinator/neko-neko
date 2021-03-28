const express = require("express");
const cors=require("cors");
const app = express();
const bodyParser = require("body-parser");
const apiEndpoints = require("./routes/endpoints");
const PORT = process.env.PORT || 5000
app.use(bodyParser.json({ extended: false }));
app.use(cors()); //TODO: configure later
app.use("/api", apiEndpoints);

app.listen(PORT,()=>{
    console.log(`api server >${PORT}<`);
});
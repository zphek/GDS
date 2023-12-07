const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const user = require("./api/routes/user.routes");

app.use(cors()); // Use cors middleware to enable CORS for all routes
app.use(express.json());

// Assuming you want to prefix all routes with "/api"
app.use("/api", user);

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

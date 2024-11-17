require("dotenv").config();
const express = require("express");
const cors = require("cors");
const applyRoutes = require("./routes/_routes.js");
const path = require("path");
const { fileURLToPath } = require("url");

// Directories


// Configure environment variables
dotenv.config();

const app = express();

// Use cors middleware
app.use(cors());

// Apply routes
applyRoutes(app);

// Serve static files from the 'client/dist' directory
app.use(express.static("client/dist"));

// Catch-all route to serve index.html for SPA routing (e.g., for Vue Router)
app.get("*", (req, res) => {
	res.sendFile(path.join("client/dist", "index.html"));
});

// Start the server on the port Heroku provides or 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

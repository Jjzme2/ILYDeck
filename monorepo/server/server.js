import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import applyRoutes from "./routes/_routes.js";
import path from "path";
import { fileURLToPath } from "url";

// Directories
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.join(currentDirectory, "..");
const distDirectory = path.join(rootDirectory, "client", "dist");

// Configure environment variables
dotenv.config();

const app = express();

// Use cors middleware
app.use(cors());

// Apply routes
applyRoutes(app);

// Serve static files from the 'client/dist' directory
app.use(express.static(distDirectory));

// Catch-all route to serve index.html for SPA routing (e.g., for Vue Router)
app.get("*", (req, res) => {
	res.sendFile(path.join(distDirectory, "index.html"));
});

// Start the server on the port Heroku provides or 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});


import express from "express";
import session from "express-session";
import path from "path";
import authRoutes from "./routes/authRoutes.js";  // Importing Routes

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret-key", resave: false, saveUninitialized: true }));

// Serve static files (for HTML views)
app.use(express.static(path.join(path.resolve(), "views")));

// Routes
app.use("/auth", authRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import path from "path";

const router = express.Router();

// Login View
router.get("/login", (req, res) => {
    res.sendFile(path.resolve("views/login.html"));
});

// Login POST
router.post("/login", (req, res) => {
    const { username } = req.body;
    if (username) {
        req.session.user = username;
        res.redirect("/auth/profile");
    } else {
        res.send("Login failed. Please enter a username.");
    }
});

// Profile View (Protected Route)
router.get("/profile", authMiddleware, (req, res) => {
    res.sendFile(path.resolve("views/profile.html"));
});

// Logout
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/auth/login");
    });
});

export default router;

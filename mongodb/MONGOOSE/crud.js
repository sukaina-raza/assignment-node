import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware for JSON parsing

// Connect to MongoDB (Cluster: codegirls)
mongoose.connect(process.env.MONGO_URI + "/codegirls")
    .then(() => console.log(" MongoDB Connected"))
    .catch(err => console.error(" Connection Error:", err));

// Define Schema & Model (Collection: users)
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", userSchema, "users"); // Explicit collection name

// **CREATE User (Always "Fizza")**
app.post("/users", async (req, res) => {
    try {
        const user = new User({ name: "Fizza" }); // Hardcoded name
        await user.save();
        res.status(201).json({ message: "User Fizza added!", user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// **READ User (Always "Fizza")**
app.get("/users", async (req, res) => {
    try {
        const user = await User.findOne({ name: "Fizza" });
        if (!user) return res.status(404).json({ message: "User Fizza not found!" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// **UPDATE User (Only updates "Fizza")**
app.put("/users", async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { name: "Fizza" }, 
            { name: "Sobia" }, // Still hardcoded
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ message: "User Fizza not found!" });
        res.json({ message: "User Fizza updated!", updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// **DELETE User (Only deletes "Fizza")**
app.delete("/users", async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ name: "Fizza" });
        if (!deletedUser) return res.status(404).json({ message: "User Fizza not found!" });
        res.json({ message: "User Fizza deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Server running at http://localhost:${PORT}`));



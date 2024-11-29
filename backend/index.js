const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 4000;
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

router.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Server is working" });
});

router.get("/posts", (req, res) => {
    console.log("[GET] /posts");

    const posts = [
        {
            title: "Post One",
            content: "This is the content of the first post. It contains insightful information on Express routing."
        },
        {
            title: "Post Two",
            content: "This post dives deeper into how middleware works in Express.js and why it's important."
        },
        {
            title: "Post Three",
            content: "Learn about the importance of error handling in Express applications through this example."
        }
    ];

    return res.status(200).json({ success: true, posts });
});

router.post("/login", async (req, res) => {
    console.log("[POST] /login");

    let username = req.body.username;
    const password = req.body.password;

    username = username.toLowerCase();

    try {
        console.log("[200] Login successful");
        return res.status(200).json({ success: true, message: "Login successful", type: user.type });
    } catch (error) {
        console.log("[500] Internal server error");
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log("[SERVER] Running on http://localhost:" + port);
});

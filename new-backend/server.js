const dotenv = require("dotenv");
const app = require("./src/app");

dotenv.config();

const port = process.env.PORT || 4000;

// Start the server
app.listen(port, () => {
    console.log(`[SERVER] Running on http://localhost:${port}`);
});
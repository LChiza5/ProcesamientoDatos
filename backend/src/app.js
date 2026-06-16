import express from "express"
import dotenv from "dotenv"

dotenv.config();

const NAME=process.env.SERVER_NAME;
const VERSION=process.env.SERVER_VERSION;
const DESCRIPTION=process.env.SERVER_DESCRIPTION;
const PORT=process.env.SERVER_PORT;

const app = express();

app.get("/",(req,res) => {
    res.send(`<h1>${NAME} </h1><p>Version: ${VERSION}</p><p>${DESCRIPTION}`);
});

app.listen(4000, () => {
    console.log(`${NAME} ${VERSION} ejecutandose en http://localhost:4000/`);
});

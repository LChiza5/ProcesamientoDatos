import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const NAME=process.env.SERVER_NAME;
const VERSION=process.env.SERVER_VERSION;
const DESCRIPTION=process.env.SERVER_DESCRIPTION;
const PORT=process.env.SERVER_PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.json({
        name: NAME,
        version: VERSION,
        description: DESCRIPTION,
        port: PORT
    });
});

app.listen(4000, () => {
    console.log(`${NAME} ${VERSION} ejecutandose en http://localhost:4000/`);
});

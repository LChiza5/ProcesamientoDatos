import express from "express"

const app = express();

app.get("/",(req,res) => {
    res.send("<h1>no se programar</h1>");
});

app.listen(4000, () => {
    console.log("servidor corriendo");
});

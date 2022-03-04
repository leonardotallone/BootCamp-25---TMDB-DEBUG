// Configuración del server
const express = require("express");
const app = express();
const morgan = require("morgan");

const routes = require("./routes/index");
const cors = require("cors");

app.use(morgan("tiny"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// El Middleware para manejo de errores posee un parámetro extra, en este caso lo llamamos err
// Este último Middleware detecta los errores y los coloca en dicho parámetro

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Some custom error!!");
});

app.use("/api", routes); //antes de server Up!!!!

app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});

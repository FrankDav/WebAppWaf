import express from "express";
import helmet from "helmet";

import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes.js";

dotenv.config();

const app = express();

app.use(helmet());

app.use(express.urlencoded({ extended: false }));

// Servir archivos HTML
app.use(express.static("views"));

// Rutas
app.use(usersRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

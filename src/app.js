/*import express from "express";
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
*/

import express from "express";
import helmet from "helmet";
import usersRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: false }));

// Archivos estáticos
app.use(express.static("/views"));

// Ruta raíz (IMPORTANTE)
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/register.html");
});

app.use(usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

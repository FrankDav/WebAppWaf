import { poolPromise } from "../db.js";
import sql from "mssql";
import { validationResult } from "express-validator";

export const registerUser = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send("Datos inválidos");
  }

  const { name, email } = req.body;

  try {
const conn = await poolPromise;
    await conn.request()
      .input("name", sql.VarChar, name)
      .input("email", sql.VarChar, email)
      .query("INSERT INTO users (name, email) VALUES (@name, @email)");

    res.redirect("/users");

  } catch (error) {
    res.status(500).send("Error al registrar usuario");
  }
};

export const getUsers = async (req, res) => {
  try {
    const conn = await poolPromise;
    const result = await conn.request()
      .query("SELECT name, email FROM users");


    let html = `
      <h2>Usuarios registrados</h2>
      <ul>
    `;

    result.recordset.forEach(user => {
      html += `<li>${user.name} - ${user.email}</li>`;
    });

    html += `</ul>`;

    res.send(html);

  } catch (error) {
    res.status(500).send("Error al obtener usuarios");
  }
};


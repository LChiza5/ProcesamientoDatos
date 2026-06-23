import pool from "../../config/db.js";
import bcrypt from "bcrypt";

export async function agregarUsuario(req, res) {
    try {
        const { nombre, correo, contrasena, confirmacion } = req.body;

        if (!nombre || nombre.trim() === "") {
            return res.status(400).json({ error: "El nombre es obligatorio" });
        }

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correo || !regexCorreo.test(correo)) {
            return res.status(400).json({ error: "El correo no tiene un formato válido" });
        }

        const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!contrasena || !regexContrasena.test(contrasena)) {
            return res.status(400).json({
                error: "La contraseña debe tener mínimo 8 caracteres, mayúsculas, minúsculas y números"
            });
        }

        if (contrasena !== confirmacion) {
            return res.status(400).json({ error: "La contraseña y la confirmación no coinciden" });
        }

        const [result] = await pool.execute(
            `INSERT INTO usuarios
            (nombre, correo, contrasena)
            VALUES (?, ?, ?)`,
            [
                nombre,
                correo,
                await bcrypt.hash(contrasena,10)
            ]
        );
        return res.json({
            id: result.insertID,
            nombre: nombre,
            correo: correo,
            mensaje: "Usuario registrado correctamente"
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({error: error.sqlMessage});
        }
    }
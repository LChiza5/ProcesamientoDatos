export function agregarUsuario(req, res) {
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

    return res.status(200).json({ mensaje: "Usuario agregado correctamente" });
}

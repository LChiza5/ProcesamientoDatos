import { Router } from "express";

import { agregarUsuario } from "../controllers/usuario.controller.js";

const router = Router();

router.post('/agregar', agregarUsuario);

export default router;

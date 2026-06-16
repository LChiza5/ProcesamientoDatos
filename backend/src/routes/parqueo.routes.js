import { Router } from "express";

import { calcularCobro } from "../controllers/parqueo.controller.js";

const router = Router();

router.post('/calcular', calcularCobro);

export default router;
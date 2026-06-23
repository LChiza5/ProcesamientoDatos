import { Router } from "express";
import { agregarUsuario } from "../controllers/usuario.controller.js";
import { obtenerUsuarios} from "../controllers/usuario.controller.js";
import { obtenerUsuarioPorId } from "../controllers/usuario.controller.js";
import { actualizarUsuario } from "../controllers/usuario.controller.js";
import { eliminarUsuario } from "../controllers/usuario.controller.js";
import { autenticar } from "../controllers/usuario.controller.js";

const router = Router();

router.post('/agregar', agregarUsuario);
router.get('/obtenerUsuarios', obtenerUsuarios);
router.get('/obtenerUsuarioPorId', obtenerUsuarioPorId);
router.patch('/actualizarUsuario', actualizarUsuario);
router.delete('/eliminarUsuario', eliminarUsuario);
router.post('/autenticar', autenticar);

export default router;

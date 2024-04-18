// problemRoutes.js
import express from "express";
const router = express.Router();
import problemController from "../controllers/problemController.js";

router.get('/', problemController.getAllProblems);
router.post('/', problemController.createProblem);
router.put('/:id', problemController.updateProblem);
router.delete('/:id', problemController.deleteProblem);

export default router;

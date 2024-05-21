import express from "express";
import { createUser, getAminUser, getUserById, getUsers } from "./user.controller";
const router = express.Router()

router.get('/', getUsers)
router.get("/admins", getAminUser)
router.get('/:id', getUserById)
router.post('/create-user', createUser)


export default router;

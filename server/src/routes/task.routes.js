import { Router } from "express";

const router = Router();

router.get("/", (req,res)=>{
    res.json({message: "task"})
})
router.get("/getTasks", (req,res)=>{
    res.json({message: "get tasks"})
})
router.get("/getTaskByID",(req,res)=>{
    res.json({message: "get task by id"})
})
router.post("/createTask", (req,res)=>{
    res.json({message:"Task created"})
})
router.put("/updateTask", (req,res)=>{
    res.json({message:"Task updated"})
})
router.delete("/deleteTask", (req,res)=>{
    res.json({message:"Task deleted"})
})

export default router
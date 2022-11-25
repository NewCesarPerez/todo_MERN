import mongoose from "mongoose"

const taskModel = {
    timestamp: { type: String, required: true, default: new Date() },
    text:{type: String, required:true },
    completed:{type: String, required: true}
}

export default taskModel
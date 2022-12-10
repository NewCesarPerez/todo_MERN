

const taskModel = {
    timestamp: { type: String, required: true, default: new Date() },
    text:{type: String, required:true },
    completed:{type: Boolean, required: true}
}

export default taskModel
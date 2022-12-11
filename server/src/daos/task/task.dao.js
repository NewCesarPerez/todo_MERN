import mongoContainer from "../../container/mongo.Container.js"
import taskModel from "../../model/task.model.js"
let instance = null;
class taskDaoMongo extends mongoContainer{
    
    constructor() {
        super("task", taskModel);
      }

      static getInstance(){
        if (!instance) return instance = new taskDaoMongo()
        else return instance
      }
}

export default taskDaoMongo
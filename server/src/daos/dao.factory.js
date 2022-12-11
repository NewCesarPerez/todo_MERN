import config from "../config/config.js";
const baseDatos = process.env.DATABASE_HEROKU || config.dataBase;
import taskDaoMongo from "./task/task.dao.js";

export default class DaoFactory {
    static getTaskDao(){
            
        if (baseDatos==="mongo") return taskDaoMongo.getInstance();
        else throw Error('no other db implemented');
    }
}

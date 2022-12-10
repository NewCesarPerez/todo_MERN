import config from "../config/config.js";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_ATLAS_URL_HEROKU || config.mongoAtlas);

export class ContenedorMongo {
  constructor(nombreColeccion, esquema) {
    this.Schema = new mongoose.Schema(esquema);
    this.coleccion = mongoose.model(nombreColeccion, this.Schema);
  }

  async createElement(element) {
    try {
      if (!element) {
        return null;
      } else {
        const insertedElement = this.coleccion.create(element);
        return insertedElement;
      }
    } catch (error) {
      console.log(`Error creando task DB: ${error}`);
    }
  }

  async readByID(id){
    try {
      if (!id) {
        return null;
      } else {
        const element = this.coleccion.findById(id);
        return element;
      }
    } catch (error) {
      console.log(`Error creando task DB: ${error}`);
    }
  }

  async readAll() {
    try {
      const data = await this.coleccion.find({}, { __v: 0 });
      if (data === undefined) return null;
      else return data;
    } catch (error) {
      console.log(error);
    }
  }
  async update(id, obj) {
    try {
      //Obtenemos los datos
      await this.coleccion.updateOne(
        { _id: id },
        {
          $set: obj,
        }
      );
      const updatedProduct = await this.coleccion.findOne(
        { _id: id },
        { __v: 0 }
      );
      return updatedProduct;
    } catch (error) {
      console.log(`Saving error: ${error}`);
      
    }
  }



  async deleteElementById(id){
    try {
      if (!id) {
        return null;
      } else {
        const deletedElement = this.coleccion.deleteOne({ _id: id });
        return deletedElement;
      }
    } catch (error) {
      console.log(`Error creando task DB: ${error}`);
    }
  }
}

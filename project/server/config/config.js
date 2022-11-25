import dotenv from 'dotenv'
dotenv.config()

export default{
    port:process.env.PORT,
    mongoAtlas:process.env.MONGO_ATLAS_URL,
    secret:process.env.SECRET

}
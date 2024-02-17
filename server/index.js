const express =  require("express")
const Routes = require("./routes/userRoutes")
const todoRoutes = require('./routes/todoRoutes')
const dotenv = require('dotenv');
const connectDB = require('./database/db')
var cors= require("cors")

dotenv.config()

const app = express()


app.use(cors())
const port = process.env.PORT || 4000;

connectDB()
app.use(express.json());
app.use(Routes)
app.use(todoRoutes)

app.listen(port,()=>{
    console.log("app listenung to the post:", port)
})
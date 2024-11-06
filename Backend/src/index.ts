import express from 'express';
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import dashboarRoutes from './routes/dashboardRoutes'
import expensesRoutes from './routes/expenseRoutes'
import usersRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'


dotenv.config();
const app = express()
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use("/dashboard", dashboarRoutes);
app.use("/expenses", expensesRoutes);
app.use("/users", usersRoutes);
app.use("/products", productRoutes)


const port = Number(process.env.PORT)||3001;
app.listen(port,"0.0.0.0", ()=>{
    console.log(`Servidor ejecutandose en el puerto ${port}`);
})

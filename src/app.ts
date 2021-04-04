import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

const API_URL = process.env.API_URL || "http://localhost:3000";

const app = express();
const router = express.Router();

const corsOptions: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: API_URL,
    preflightContinue: false,
};

//use cors middleware
router.use(cors(corsOptions));


// parse requests of content-type - application/json
router.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));


// const db = require("./models");
//db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });




//add your routes
// require("./routes/turorial.routes")(app);


app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
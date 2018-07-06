const express = require ('express');
const PORT = 5000;

const app = express();
app.set("view engine", "ejs");

    const getHomeCallback = (req, res) => { 
        console.info("Hola Mundo desde Express");
        res.render(`inicio`);
};

    app.get("/inicio", getHomeCallback);


    app.get("/producto", (req, res) => {
       
const productosArr=[{nombre:"Aire acondicionado 1",descripcion:"Aire Acondicionado Split Sanyo Frio/Calor 2769 Fg 3220 W",precio:"$12499"},
{nombre:"Aire acondicionado 2",descripcion:"Aire Acondicionado Split Sanyo Frio/Calor 2769 Fg 3220 W",precio:"$13999"},
{nombre:"Aire acondicionado 3",descripcion:"Aire Acondicionado Split Samsung Frio/Calor Inverter WiFi 3010 Fg 3500 W",precio:"$24999"}];
        
        res.render(`producto`,{producto:productosArr}); 
});
    
app.use (express.static ("Public"));


app.listen(PORT, ()=> console.info("Iniciando en Puerto 5000"));

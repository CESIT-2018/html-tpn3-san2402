const express = require ('express');

const app = express();

    const getHomeCallback = (req, res) =>{ 
        console.info("Hola Mundo desde Express");
        res.send (" Hola ¡¡")
};

    app.get("/", getHomeCallback);

    app.get("/Productos", (req, res)=>{
        let html = "<h1> Productos </h1>";
            res.send(html);
})
    
app.use (express.static ("Public"));

app.listen(3000, ()=> console.info("Iniciando en Puerto 3000"));

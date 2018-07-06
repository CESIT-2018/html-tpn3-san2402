const PORT = 5000;

const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // let html = "<h2> HOLA <h2>"
    //res.send(html);
    res.render(`index`, {nombre: "Santiago"},{Materias: ["Algebra", "Diseño", "Programacion"]});
});

app.get("/Productos", (req, res) => {
    const ProductosArr = [{ nombre: "Pro1", cant: 150 },
    { nombre: "Pro2", cant: 50 },
    { nombre: "Pro3", cant: 40 }];

    res.render(`Productos`, { Productos: ProductosArr });

});
app.use(express.static("public"));

app.listen(PORT, () => console.info(`Iniciando en Puerto ${PORT}`));

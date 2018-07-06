const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const agregarProducto = (prod)=>{
    if (typeof prod == 'object' && prod.nombre) {

        prod.id = listaProducto.length + 1;
        listaProducto.push(prod);
        return prod;
        
    }
    return null;
}

const listaProducto = [
    {id:1,
    nombre:"Harina"},
    {id:2,
    nombre:"Soda"},
    {id:3,
    nombre:"Mochila"}
]

const getProductos = (id)=> {

        return listaProducto.find((p)=> p.id == id);
/*
   for(let i in listaProducto){
            if (listaProducto[i].id == id) {
                return listaProducto[i];
            }
        /*}
        return null;
        */
}



app.get('/productos',(req, res)=>{
    //res.send(' Obteniendo productos ');
    //res.send({"mensaje":"GET"});

    console.info("Bienvenido"); //sera Borrado cuando implemantemos middlewares.
    res.send(listaProducto);   
});

    app.get('/productos/:id',(req, res)=>{
       
        console.info("Bienvenido");
        const producto = getProductos(req.params.id);
        if (producto) {
            res.status(200).send(producto);
        } else {
            res.status(404).send({mensaje:`no encuentro producto por id =${req.params.id}`});
        }

        //res.send({"mensaje":"Consultando POST con URL"});
        
    });

    app.post('/productos',(req, res)=>{

        const producto = agregarProducto(req.body);
        if (producto) {
            res.status(201).send(producto);
        } else {
            res.status(400).send({mensaje:`El producto no puede ser creado`});
        }

        //res.send({"mensaje":"Enviando POST con URL"});

    });

    app.put('/productos/:id',(req, res)=>{

        res.send({"mensaje":"Actualizando POST con URL"});

    });

    app.delete('/productos/:id',(req, res)=>{

        res.send({"mensaje":"Borrando"});

    });

app.listen(PORT, () => console.info(`Iniciando en Puerto ${PORT}`));
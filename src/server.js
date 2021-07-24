const express=require("express");
const path=require("path");
const exphdl=require("express-handlebars")
const method=require("method-override")
const session=require("express-session")

//Inicializacion
const server=express();
require("./db")

//Settings
const port =3000;

server.set("views", path.join(__dirname,"views"));
server.engine(".hbs",exphdl({
    defaultLayout: "main" ,
    layoutsDir:path.join(server.get("views"),("layouts")) ,
    partialsDir:path.join(server.get("views"),("partials")) ,
    extname:".hbs"
}));
server.set("view engine",".hbs")
//Middlewares
server.use(express.urlencoded({
    extended: false
}));
server.use(method("_method"))
server.use(session({
    secret:"PluFor",
    resave:true,
    saveUninitialized:true
}));
//Variables G

//Rutas
server.use(require("./routes/user"))
server.use(require("./routes/url"))
server.use(require("./routes/server"))
//Archivos estaticos
server.use(express.static(path.join(__dirname,"public")))
//Server activo
server.listen(port, () => console.log("Server is Online, in port ", port));
import  Express  from "express";
const app = Express();
app.use(Express.static(".\\destino\\"));
app.listen(3000, () => {

});
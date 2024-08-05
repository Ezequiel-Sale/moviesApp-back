const app = require("./src/server");
const dbConfig = require("./src/config/dbConfig");
const port = process.env.PORT || 4000;


dbConfig().then((res) => {
  app.listen(port, () => {
    console.log("servidor escuchando en el puerto 3000");
  });
})
.catch((err) => {
  console.log("Falto en la conexión" + err.message);
})
const app = require("./src/server");
const dbConfig = require("./src/config/dbConfig");

dbConfig().then((res) => {
  app.listen(3000, () => {
    console.log("servidor escuchando en el puerto 3000");
  });
})
.catch((err) => {
  console.log("Falto en la conexión" + err.message);
})
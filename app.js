const express = require("express");
const app = express();

const PORT = 3000;


app.get('/',(req, res) => {
    res.send('Home page it is')
})

app.listen(PORT, () => {
  console.log("app listening at port 3000");
});

const express = require("express");		// use to use the Express module
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));

app.get('/', (request, response) => {
    response.render("index");
});

app.listen(8000, () => console.log("listening on port 8000"));
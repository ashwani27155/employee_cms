const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
require("./routes/user.routes")(app);
mongoose
	.connect("mongodb://127.0.0.1:27017/db")
	.then(() => {
		console.log("Database connected Successfully");
	})
	.catch((error) => {
		console.log(error);
	});
app.listen(3000, () => {
	console.log("Server is running on port:3000");
});

const { Schema, model } = require("mongoose");
const userSchema = Schema({
	employee_id: {
		type: String,
	},
	first_name: {
		type: String,
	},
	last_name: {
		type: String,
	},
	department: {
		type: String,
	},
	Address: {
		type: String,
	},
	dob: {
		type: String,
	},
	salary: {
		type: Number,
	},
});
module.exports = model("user", userSchema);

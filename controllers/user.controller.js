const User = require("../models/user.rmodel");
const { v4: uuidv4 } = require("uuid");

// Api for add user
exports.userData = (req, res) => {
	try {
		const { first_name, last_name, department, Address, dob, salary } =
			req.body;
		const employee_id = uuidv4().replace(/-/g, "");
		const userObj = {
			employee_id: employee_id,
			first_name: first_name,
			last_name: last_name,
			department: department,
			Address: Address,
			dob: dob,
			salary: salary,
		};
		const user = new User(userObj);
		user.save();
		res.status(200).send({ msg: "data added successfully" });
	} catch (error) {
		console.log(error);
		res.status(400).send({ msg: "Some thing went wrong" });
	}
};

// Api for get all user
exports.userList = async (req, res) => {
	try {
		const user = await User.find({});

		res.status(200).send({ msg: "Data Fetched Successfully", data: user });
	} catch (error) {
		console.log(error);
		res.status(400).send({ msg: "Some thing went wrong" });
	}
};

// Api for update single user
exports.updateUser = async (req, res) => {
	try {
		const userObj = {
			salary: req.body.salary,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			department: req.body.department,
			Address: req.body.Address,
		};
		const user = await User.findOneAndUpdate(
			{ employee_id: req.body.employee_id },
			userObj,
			{ new: true }
		);

		res.status(200).send({ msg: "User updated Successfully", data: user });
	} catch (error) {
		console.log(error);
		res.status(400).send({ msg: "Some thing went wrong" });
	}
};

// Api for delete user by it's employee_id
exports.deleteUser = async (req, res) => {
	try {
		const user = await User.findOneAndDelete({
			employee_id: req.body.employee_id,
		});

		res.status(200).send({ msg: "employee Deleted Successfully", data: user });
	} catch (error) {
		console.log(error);
		res.status(400).send({ msg: "Some thing went wrong" });
	}
};

//Api for search employee by their employee_id
exports.searchEmployee_id = async (req, res) => {
	try {
		const user = await User.findOne({ employee_id: req.body.employee_id });
		//check if particular user id user is present or not
		if (!user) {
			return res
				.status(200)
				.send({ message: "Employee with this Employee id is not present" });
		} else {
			return res.status(200).send({
				message: "User found successfully",
				user: user,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

// Api for filter the department
exports.filterByDepartment = async (req, res) => {
	try {
		const departmentRegex = new RegExp(req.body.department, "i");
		const department = await User.find({ department: departmentRegex });

		if (!department) {
			res.status(200).send({ message: "No data found" });
		} else {
			res.status(200).send({
				message: "Department found successfully",
				department: department,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

//Api for sort the salary
exports.sortBySalary = async (req, res) => {
	try {
		let sortObj = {};
		let salary = req.body.salary;
		if (salary === 1) {
			sortObj.salary = 1;
		} else {
			sortObj.salary = -1;
		}
		const salaryData = await User.find({}).sort(sortObj);

		if (!salaryData) {
			res.status(200).send({ message: "No data found" });
		} else {
			res.status(200).send({
				message: "Department found successfully",
				salaryData: salaryData,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

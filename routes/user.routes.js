const User = require("../controllers/user.controller");
module.exports = (app) => {
	/*
    end points : http://localhost:3000/adduser
    method: post
    body:{
            employee_id  => Auto generated
			first_name
			last_name
			department
			Address
			dob
			salary
    }
    
    */
	app.post("/adduser", User.userData);

	/*
    end points : http://localhost:3000/userList
    method : get
    body:{
           // No nedd to send any thing
    }
    
    */
	app.get("/userList", User.userList);

	/*
    end points : http://localhost:3000/updateUser
    method: put
    body:{

        only these things are editable
        
			first_name
			last_name
			department
			Address
			salary
    }
    
    */
	app.put("/updateUser", User.updateUser);

	/*
    end points : http://localhost:3000/deleteuser
    method : delete
    body:{

        
			 employee_id 
    }
    
    */
	app.delete("/deleteuser", User.deleteUser);

	/*
    end points : http://localhost:3000/find_user_by_id
   
    method: get
    body:{

        
			 employee_id 
    }
    
    */
	app.get("/find_user_by_id", User.searchEmployee_id);

	/*
    end points : http://localhost:3000/filter_By_Department
   
    method: get
    body:{

        
			 department 
    }
    
    */
	app.get("/filter_By_Department", User.filterByDepartment);
	/*
    end points : http://localhost:3000/sort_by_salary
   
    method: get
    body:{

        
			 salary 
    }
    
    */

	app.get("/sort_by_salary", User.sortBySalary);
};

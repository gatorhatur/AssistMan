const db = require('../db/connection');
//Employee Query Class
class Employee{
    viewEmployees() {
        const sql = `SELECT emp.id,emp.first_name,emp.last_name,role.title,department.name as 'Department',role.salary,concat(mgr.first_name,' ',mgr.last_name) as 'Manager'
        FROM employee as emp
        LEFT JOIN role
        ON emp.role_id = role.id
        LEFT JOIN department
        ON role.department_id = department.id
        LEFT JOIN employee as mgr
        on emp.manager_id = mgr.id`

        const result = db.promise().query(sql)
            .then(response => response[0])
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            })
    
    return result;
    }

    viewByManager(managerId) {
        const sql = `SELECT emp.id,emp.first_name,emp.last_name,role.title,department.name as 'Department',role.salary,concat(mgr.first_name,' ',mgr.last_name) as 'Manager'
        FROM employee as emp
        LEFT JOIN role
        ON emp.role_id = role.id
        LEFT JOIN department
        ON role.department_id = department.id
        LEFT JOIN employee as mgr
        on emp.manager_id = mgr.id
        WHERE emp.manager_id = ?`;

        const result = db.promise().query(sql,managerId)
            .then(response => response[0])
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            })
    
        return result;

    }

    viewByDepartment(departmentId) {
        const sql = `SELECT emp.id,emp.first_name,emp.last_name,role.title,department.name as 'Department',role.salary,concat(mgr.first_name,' ',mgr.last_name) as 'Manager'
        FROM employee as emp
        LEFT JOIN role
        ON emp.role_id = role.id
        LEFT JOIN department
        ON role.department_id = department.id
        LEFT JOIN employee as mgr
        on emp.manager_id = mgr.id
        WHERE department.id = ?`;

        const result = db.promise().query(sql,departmentId)
            .then(response => response[0])
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            })
    
    return result;
    }

    viewBudget(departmentId) {
        const sql = `SELECT sum(role.salary*2000) as 'Budget' FROM employee 
            LEFT JOIN role 
            ON employee.role_id = role.id
            WHERE role_id IN(
                SELECT id FROM role WHERE department_id = ?)`
        
        const result = db.promise().query(sql, departmentId)
            .then(response => response[0])
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            })
        
        return result;
    }

    addNewEmployee(employeeObj) {
        const sql = `INSERT INTO employee (first_name,last_name,role_id,manager_id)
            VALUES
                (?,?,?,?)`;
        const params = [employeeObj.first, employeeObj.last, employeeObj.role, employeeObj.manager];
        //console.log(params);

        const result = db.promise().query(sql, params)
            .then(response => {
                //console.log(response[0]);
                return response[0];
            })
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            })
        
        return result;
    }

    updateRole(id, role) {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
        const params = [role, id];

       const result = db.promise().query(sql, params)
            .then(response => {
                return response[0]
            })
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            });
        
        return result
        
    }

    updateManager(employeeId, managerId) {
        const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;
        const params = [managerId, employeeId];
    }

    deleteEmployee(id) {
        const sql = `DELETE FROM employee WHERE id = ?`;
    }

    //returns an array of objects with concatenated employee first and last names
    //it also places the database id into the value field for inquirer
    //this faciliates CRUD operations
    getEmployeeList() {
        const sql = `SELECT * FROM employee`

        const result = db.promise().query(sql)
            .then(response => {
                //console.log(response[0])
                return response[0].map(element => {
                    return {
                        name: element.first_name + ' ' + element.last_name,
                        value: element.id
                    }
                })
            })
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            })
 
        return result;
     }
}


module.exports = Employee;
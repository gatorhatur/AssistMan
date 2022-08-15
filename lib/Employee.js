//Employee Query Class
class Employee{
    viewEmployees() {
        const sql = `SELECT emp.id,emp.first_name,emp.last_name,role.title,role.salary,concat(mgr.first_name,' ',mgr.last_name) as 'Manager'
        FROM employee as emp
        LEFT JOIN role
        ON emp.role_id = role.id
        LEFT JOIN employee as mgr
        on emp.manager_id = mgr.id`
    }

    viewByManager(managerId) {
        const sql = `SELECT * FROM employee WHERE manager_id = ?`;
    }

    viewByDepartment(departmentId) {
        const sql = `SELECT * FROM employee 
            WHERE role_id IN(
                SELECT id FROM role WHERE department_id = ?)`;
    }

    viewBudget(departmentId) {
        const sql = `SELECT sum(role.salary*2000) as 'Budget' FROM employee 
            LEFT JOIN role 
            ON employee.role_id = role.id
            WHERE role_id IN(
                SELECT id FROM role WHERE department_id = ?)`
    }

    addNewEmployee(employeeObj) {
        const sql = `INSERT INTO employee (first_name,last_name,role_id,manager_id)
            VALUES
                (?,?,?,?)`;
        const params = [employeeObj.first, employeeObj.last, employeeObj.role, employeeObj.manager];
    }

    updateRole(id, role) {
        const sql = `UPDATE employee SET role = ? WHERE id = ?`;
        const params = [role, id];
        
    }

    updateManager(employeeId, managerId) {
        const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;
        const params = [managerId, employeeId];
    }

    deleteEmployee(id) {
        const sql = `DELETE FROM employee WHERE id = ?`;
    }
}

module.exports = Employee;
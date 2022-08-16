const db = require('../db/connection');

class Role{
    viewRoles() {
        const sql = `SELECT * FROM role`;
    }

    addNewRole(roleObj) {
        const sql = `INSERT INTO role (title,salary,department_id)
        VALUES
            (?,?,?)`
        const params = [roleObj.title, roleObj.salary, roleObj.department_id];
    }

    deleteRole(id) {
        const sql = `DELETE FROM role WHERE id = ?`
    }

    //returns an array of role names for creating a new employee
    getRolesList() {
        const sql = `SELECT * FROM role`;

        const result = db.promise().query(sql)
        .then(response => {
            //console.log(response[0])
            return response[0].map(element => {
                return { name: element.title, value: element.id }
            })
        })

    return result;
    }
}

module.exports = Role;
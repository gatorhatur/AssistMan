const db = require('../db/connection');

class Role{
    viewRoles() {
        const sql = `SELECT * FROM role`;

        const result = db.promise().query(sql)
        .then(response => response[0])
    
    return result;
    }

    addNewRole(roleObj) {
        const sql = `INSERT INTO role (title,salary,department_id)
        VALUES
            (?,?,?)`
        const params = [roleObj.title, roleObj.salary, roleObj.department_id];

        const result = db.promise().query(sql, params)
            .then(response => {
                if (response) {
                    //console.log(response[0]);
                    return response[0];
                }
                console.log("An error occured");
            })
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            })
    
        return result;
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
        .catch(err => {
            console.log(`There was an error: ${err}`)
            return;
        })

    return result;
    }
}

module.exports = Role;
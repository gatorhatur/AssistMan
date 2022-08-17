const db = require('../db/connection');

class Department {
    viewDepartments() {
        const sql = `SELECT * FROM department`

        const result = db.promise().query(sql)
            .then(response => response[0])
            .catch(err => {
                console.log(`There was an error: ${err}`)
                return;
            })
        
        return result;

    }

    addNewDepartment(deptName) {
        const sql = `INSERT INTO department (name)
        VALUES
            (?)`
        
        const result = db.promise().query(sql, deptName)
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

    deleteDepartment(id) {
        const sql = `DELETE FROM department WHERE id = ?`
    }

    //returns array of department names, for creating a new role
   getDepartments() {
        const sql = 'SELECT * FROM department'

       const result = db.promise().query(sql)
           .then(response => {
               //console.log(response[0])
               return response[0].map(element => {
                   return { name: element.name, value: element.id }
               })
           })
           .catch(err => {
            console.log(`There was an error: ${err}`)
            return;
        })

       return result;
    }
}

module.exports = Department;
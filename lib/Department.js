class Department {
    viewDepartments() {
        const sql = `SELECT * FROM department`
    }

    addNewDepartment(deptName) {
        const sql = `INSERT INTO department (name)
        VALUES
            (?)`
    }

    deleteDepartment(id) {
        const sql = `DELETE FROM department WHERE id = ?`
    }
}

module.exports = Department;
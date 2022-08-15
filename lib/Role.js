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
}

module.exports = Role;
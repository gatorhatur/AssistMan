const Role = require('../lib/Role');


describe('Role Test', () => {
    const role = new Role;

    describe('Should show all roles', () => {
        let result = role.viewRoles();

        it('Should contain an array of data', () => expect(result.data).toBe(typeof Array))
    });

    describe('Should add a new role', () => {
        const roleObj = {
            title: 'jest_test_role',
            salary: 13.25,
            department_id: 1 
        }
        let result = role.addNewRole(roleObj);

        it('Should expect a success message', () => expect(result.message).toBe('success'));
    });

    describe('Should test role deletion', () => {
        let data = role.viewRoles().filter(element, () => element.title === 'jest_test_role');
        let result = role.deleteRole(data.id);
        let result2 = role.deleteRole(data.id);

        it('Should expect a success message', () => expect(result.message).toBe('success'));
        it('Should expect an error', () => expect(result2.error).toBeTruthy());
    });
});
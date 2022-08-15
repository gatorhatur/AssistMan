const Department = require('../lib/Department');


describe('Department Test', () => {
    const department = new Department;

    describe('Should show all departments', () => {
        let result = department.viewDepartments();

        it('Should contain an array of data', () => expect(result.data).toBe(typeof Array))
    });

    describe('Should add a new department', () => {
        let result = department.addNewDepartment('Returns');
        let result2 = department.addNewDepartment('Returns');

        it('Should expect a success message', () => expect(result.message).toBe('success'));
        it('Should expect an error', () => expect(result2.error).toBeTruthy());
    });

    describe('Should delete a department', () => {
        let data = department.viewDepartments().filter(element, () => element.name === 'Returns');
        let result = department.deleteDepartment(data.id);
        let result2 = department.deleteDepartment(data.id);

        it('Should expect a success message', () => expect(result.message).toBe('success'));
        it('Should expect an error', () => expect(result2.error).toBeTruthy());
    });
});